// app/api/admin/route.ts (全て上書き)
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'; // ★ Cookieを追加

// Prisma Singletonの定義
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// ★ 定数定義を明確に（process.envの型エラーを回避）
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "soluna_admin_secret_key_2026";
const COOKIE_NAME = 'admin_session';

// --- GET (データ取得と認証チェック) ---
export async function GET(request: Request) {
  try {
    // 認証ロジック：Cookieチェック
    const sessionToken = cookies().get(COOKIE_NAME)?.value;

    if (!sessionToken || sessionToken !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized via Cookie' }, { status: 401 });
    }
    
    // データ取得
    const claims = await prisma.claim.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(claims);

  } catch (error) {
    console.error("Admin API GET Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// --- PUT (ステータス更新/送金後処理) ---
export async function PUT(request: Request) {
  try {
    // 認証ロジック：Cookieチェック
    const sessionToken = cookies().get(COOKIE_NAME)?.value;
    if (!sessionToken || sessionToken !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    const { id, status } = body as { id: string; status: string; }; // 型アサーションでエラーを回避

    const updatedClaim = await prisma.claim.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedClaim);
  } catch (error) {
    console.error("Admin API PUT Error:", error);
    return NextResponse.json({ error: 'Update Failed' }, { status: 500 });
  }
}