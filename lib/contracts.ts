



// lib/contracts.ts



// 1. SOLUNAの住所（コントラクトアドレス）

// あなたの手元にある「0x...」で始まるアドレスに書き換えてください

export const SOLUNA_CONTRACT_ADDRESS = "0x0cda4244430aB35D93E9cfc9AC2b5761dbf66002"; 



// 2. SOLUNAの合い鍵（最小限のABI）

// これがあれば「残高確認」と「通貨単位の取得」ができます

export const SOLUNA_ABI = [

  // 残高を問い合わせる機能

  {

    "constant": true,

    "inputs": [{ "name": "_owner", "type": "address" }],

    "name": "balanceOf",

    "outputs": [{ "name": "balance", "type": "uint256" }],

    "type": "function"

  },

  // トークンの桁数を問い合わせる機能（通常は18）

  {

    "constant": true,

    "inputs": [],

    "name": "decimals",

    "outputs": [{ "name": "", "type": "uint8" }],

    "type": "function"

  },

  // 通貨記号（SOLUNAなど）を問い合わせる機能

  {

    "constant": true,

    "inputs": [],

    "name": "symbol",

    "outputs": [{ "name": "", "type": "string" }],

    "type": "function"

  }

];