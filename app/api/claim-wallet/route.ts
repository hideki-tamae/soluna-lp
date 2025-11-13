import { NextResponse } from 'next/server'
import { Pool } from 'pg'
import crypto from 'crypto'

export const runtime = 'nodejs' // EdgeじゃなくNode

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function POST(req: Request) {
  try {
    const { passphrase, walletAddress, bookId } = await req.json()

    if (!passphrase || !walletAddress || !bookId) {
      return NextResponse.json(
        { ok: false, message: 'passphrase, walletAddress, bookId は必須です。' },
        { status: 400 },
      )
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      return NextResponse.json(
        { ok: false, message: 'ウォレットアドレスの形式が正しくありません。' },
        { status: 400 },
      )
    }

    const passphraseHash = crypto
      .createHash('sha256')
      .update(passphrase, 'utf8')
      .digest('hex')

    const client = await pool.connect()

    const result = await client.query(
      `
      INSERT INTO claims (
        passphrase_hash,
        address,
        recipient_address,
        book_id,
        status
      )
      VALUES ($1, $2, $3, $4, 'PENDING')
      ON CONFLICT (book_id, recipient_address)
      DO NOTHING
      RETURNING id;
      `,
      [passphraseHash, walletAddress, walletAddress, bookId],
    )

    client.release()

    if (result.rowCount === 0) {
      return NextResponse.json({
        ok: true,
        message: 'このウォレットは既にこの本のSOLUNAを受け取っています。',
      })
    }

    return NextResponse.json({
      ok: true,
      message: 'SOLUNA受け取りリクエストを登録しました。',
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { ok: false, message: 'サーバー側でエラーが発生しました。' },
      { status: 500 },
    )
  }
}

