import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; // ★PrismaClientをインポート

const prisma = new PrismaClient(); // PrismaClientをインスタンス化

// 申請一覧を取得する GET リクエストを処理
export async function GET() {
  console.log("⚡️API: /api/admin/get-claims called (GET)");

  try {
    // 1. データベースからすべての Claim（申請）データを取得する
    // 最新のものが上に来るように、createdAtで降順（desc）に並べ替えます。
    const claims = await prisma.claim.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    // 2. 取得したデータをJSON形式でクライアントに返す
    return NextResponse.json({
      success: true,
      claims: claims,
      message: "データが正常に取得されました",
    });

  } catch (error) {
    console.error("❌ DB Fetch Error:", error);
    // データベース接続やクエリのエラーをキャッチ
    return NextResponse.json(
      { success: false, error: "データベースからのデータ取得に失敗しました" },
      { status: 500 }
    );
  }
}