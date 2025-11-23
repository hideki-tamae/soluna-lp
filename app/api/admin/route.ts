// app/api/admin/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "soluna_admin_secret_key_2026";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const claims = await prisma.claim.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(claims);

  } catch (error) {
    console.error("Admin API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, status } = body;

    const updatedClaim = await prisma.claim.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedClaim);
  } catch (error) {
    return NextResponse.json({ error: 'Update Failed' }, { status: 500 });
  }
}