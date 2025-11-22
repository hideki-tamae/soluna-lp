import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 認証チェック関数
const isAuthenticated = (req: Request) => {
  const authHeader = req.headers.get('authorization');
  return authHeader === `Bearer ${process.env.ADMIN_PASSWORD}`;
};

// GET: 申請一覧の取得
export async function GET(request: Request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 最新順に全件取得
    const claims = await prisma.claim.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(claims);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to fetch claims' }, { status: 500 });
  }
}

// PUT: ステータスの更新（承認処理）
export async function PUT(request: Request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing ID or Status' }, { status: 400 });
    }

    const updatedClaim = await prisma.claim.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedClaim);
  } catch (error) {
    console.error('Update Error:', error);
    return NextResponse.json({ error: 'Failed to update claim' }, { status: 500 });
  }
}