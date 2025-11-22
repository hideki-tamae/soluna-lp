import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phrase } = body; // 合言葉のみをチェック

    // 合言葉のチェック（"TEST" または "SOLUNA" ならOK）
    if (phrase !== "TEST" && phrase !== "SOLUNA") {
      // 失敗時は400を返す
      return NextResponse.json(
        { success: false, message: "合言葉が間違っています。TESTまたはSOLUNAを入力してください。" },
        { status: 400 }
      );
    }

    // 成功時のモックレスポンス（成功メッセージはクライアント側で生成）
    const mockId = "claim_" + Math.random().toString(36).substr(2, 9);

    return NextResponse.json({
      success: true,
      message: "申請処理は正常に完了しました。", // クライアントが使うメッセージ
      id: mockId,
    });

  } catch (error) {
    console.error("Claim API Error:", error);
    return NextResponse.json(
      { success: false, message: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}