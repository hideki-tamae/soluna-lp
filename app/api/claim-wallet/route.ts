// app/api/claim-wallet/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '@/lib/hmac';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    // 1) クレーム受付フラグ
    if (process.env.CLAIM_OPEN !== '1') {
      return NextResponse.json(
        { ok: false, error: 'Claim not open yet.' },
        { status: 403 }
      );
    }

    const body = await req.json();

    const soluna = String(body?.soluna ?? '').trim();
    const phrase = String(body?.phrase ?? '').trim();
    const wallet = String(body?.wallet ?? '').trim();
    const turnstile = String(body?.turnstile ?? '').trim(); // いまは未使用

    // 2) SOLUNA の文字チェック
    const expectedLiteral = process.env.NEXT_PUBLIC_SOLUNA_LITERAL || 'SOLUNA';
    if (soluna !== expectedLiteral) {
      return NextResponse.json(
        { ok: false, error: 'Invalid SOLUNA literal.' },
        { status: 400 }
      );
    }

    // 3) 本のパスフレーズチェック
    const passphrase = process.env.CLAIM_PASSPHRASE;
    if (!passphrase || phrase !== passphrase) {
      return NextResponse.json(
        { ok: false, error: 'Invalid passphrase.' },
        { status: 401 }
      );
    }

    // 4) ウォレット必須チェック
    if (!wallet) {
      return NextResponse.json(
        { ok: false, error: 'Wallet is required.' },
        { status: 400 }
      );
    }

    // 5) バックエンド URL チェック
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      return NextResponse.json(
        { ok: false, error: 'Backend URL not configured.' },
        { status: 500 }
      );
    }

    // 6) バックエンドに送るペイロード
    const payload = { wallet, soluna, phrase };

    // 7) HMAC 署名をつける
    const signature = signToken(payload);

    // 8) バックエンド /claim に転送
    const resp = await fetch(`${backendUrl}/claim`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-signature': signature,
      },
      body: JSON.stringify(payload),
    });

    const json = await resp.json();

    // 9) バックエンドのレスポンスをそのまま返す
    return NextResponse.json(json, { status: resp.status });
  } catch (err) {
    console.error('claim-wallet error:', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
