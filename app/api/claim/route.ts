import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ⚠️ Prisma用に edge runtime は削除済み

export async function POST(req: NextRequest) {
  try {
    // 1. 受付期間のチェック
    if (process.env.CLAIM_OPEN !== '1') {
      return NextResponse.json({ message: 'Claim not open yet.' }, { status: 403 });
    }

    // 2. データの受け取り
    const body = await req.json();
    const name = (body?.name || '名無し').trim();
    const email = (body?.email || 'no-email@example.com').trim();
    const soluna = (body?.soluna || '0').trim();
    const phrase = (body?.phrase || '').trim();
    
    // const turnstile = (body?.turnstile || '').trim(); // 👈 一時的に無効化

    // 3. サーバー設定のチェック
    const pass = process.env.CLAIM_PASSPHRASE;
    const secret = process.env.SIGNING_SECRET;
    if (!pass || !secret) {
      return NextResponse.json({ message: 'Server not configured.' }, { status: 500 });
    }

    // 4. Bot対策 (Turnstile) - 👈 ここを丸ごとコメントアウト（無効化）しました！
    /*
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    
    if (siteKey && secretKey) {
      if (!turnstile) {
        return NextResponse.json({ message: 'Bot verification failed.' }, { status: 400 });
      }
      
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: secretKey,
          response: turnstile,
        }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return NextResponse.json({ message: 'Bot check failed.' }, { status: 400 });
      }
    }
    */

    // 5. データベースに保存 (Create)
    const amountInt = parseInt(soluna, 10) || 0;

    const newClaim = await prisma.claim.create({
      data: {
        userId: 'public_user',
        userName: name,
        email: email,
        amount: amountInt,
        description: phrase,
        status: 'pending',
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Application received',
      id: newClaim.id 
    });

  } catch (error) {
    console.error('Claim Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}