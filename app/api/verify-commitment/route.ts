import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = `data:${file.type};base64,${buffer.toString('base64')}`;

    // AIへの指示：本のタイトルと支払い事実の「両方」を厳密にチェックさせる
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `この画像を解析し、以下の判定基準に一致するキーワードを探してください。
              
              【重要プライバシー通知】
              **画像内の氏名、住所、クレジットカード情報などの個人情報（PII）は、判定に使用せず、必ず無視してください。**

              【ランク: "CITIZEN" (購入者) の判定基準】
              以下の2つの条件を**同時に**満たしているか厳密にチェックせよ：
              1. **本のタイトル:** 「Re-Verse Civilization」またはそのISBN（978-4...）が含まれている。
              2. **支払い事実:** 「注文日」があり、かつ「合計」等の金額(￥1以上)が表示されている（0円決済は不可）。
              上記の条件を同時に満たす場合のみ、"CITIZEN"と判定する。

              【ランク: "TESTER" (読み放題/体験版) の判定基準】
              以下のいずれかの文言または状況が含まれていれば、"TESTER" と返してください：
              - 「Kindle Unlimited」のロゴマーク
              - 「利用しました」 (例: 2025年...に利用しました)
              - 「レンタル日」 (管理画面の表記)
              - 「読み放題で読む」ボタン
              - 「￥0」での取得履歴

              【ランク: "UNKNOWN"】
              上記が全く見当たらない場合。

              レスポンス形式(JSON): { "rank": "CITIZEN" | "TESTER" | "UNKNOWN", "reason": "判定の根拠となったキーワードを引用して説明" }`
            },
            {
              type: "image_url",
              image_url: { url: base64Image },
            },
          ],
        },
      ],
      response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content;
    if (!content) throw new Error("No response from AI");

    const result = JSON.parse(content);
    return NextResponse.json(result);

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}