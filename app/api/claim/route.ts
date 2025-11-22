// app/api/claim/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
// import crypto from 'crypto';

// Prismaクライアントのインスタンス作成（グローバル汚染防止）
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// 申請を受け付ける合言葉（環境変数から取得、なければデフォルト）
const PASSPHRASE = process.env.CLAIM_PASSPHRASE || "SOLUNA2025";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { walletAddress, passphrase } = body;

    // 1. バリデーション（入力チェック）
    if (!walletAddress || !passphrase) {
      return NextResponse.json(
        { error: 'ウォレットアドレスと合言葉は必須です' },
        { status: 400 }
      );
    }

    // 2. 合言葉チェック
    if (passphrase !== PASSPHRASE) {
      return NextResponse.json(
        { error: '合言葉が間違っています' },
        { status: 403 }
      );
    }

    // ▼▼▼ 追加：Abuse Protection（重複チェック） ▼▼▼
    
    // 3. データベースに同じウォレットアドレスがあるか確認
    const existingClaim = await prisma.claim.findUnique({
      where: { walletAddress: walletAddress },
    });

    if (existingClaim) {
      // すでに申請済みの場合はエラーを返す
      return NextResponse.json(
        { error: 'このウォレットは既に申請済みです。お一人様1回までです。' },
        { status: 429 } // 429: Too Many Requests
      );
    }
    // ▲▲▲ 追加終わり ▲▲▲

    // 4. 申請データを保存
    // IDをランダム生成（claim_ + ランダム文字列）
    // const claimId = `claim_${crypto.randomBytes(4).toString('hex')}`;
    　　const claimId = `claim_${Math.random().toString(36).substring(2, 10)}`;
    
    const newClaim = await prisma.claim.create({
      data: {
        id: claimId,
        walletAddress: walletAddress,
        passphrase: passphrase,
        status: 'approved', // 初期ステータス（後でpendingにする運用も可）
      },
    });

    return NextResponse.json({ 
      success: true, 
      id: newClaim.id,
      message: '申請を受け付けました' 
    });

  } catch (error) {
    console.error('Claim API Error:', error);
    return NextResponse.json(
      { error: 'サーバー内部エラーが発生しました' },
      { status: 500 }
    );
  }
}