import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox"; // ツールボックスをインポート
import "dotenv/config"; // .env ファイルから環境変数を読み込むために必要

// 環境変数から秘密鍵とURLを取得
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const SEPOLIA_URL = process.env.SEPOLIA_URL || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    // 🚨 有効化: Sepoliaテストネットの設定
    sepolia: {
      url: SEPOLIA_URL,
      // 秘密鍵が存在する場合のみaccountsに設定
      accounts: PRIVATE_KEY !== "" ? [PRIVATE_KEY] : [], 
    },
  },
};

export default config;