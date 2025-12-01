import { ethers } from "hardhat";

// 🚨 【重要】トークン発行を承認するウォレットアドレス（バックエンドAPIのアドレス）を指定してください
// デプロイ前に、実際に使用するアドレスに置き換える必要があります。
const INITIAL_CLAIM_SIGNER_ADDRESS = "0x000000000000000000000000000000000000dEaD"; // 仮のアドレス

async function main() {
  console.log("--- Deployment Started ---");

  // 1. Claim承認者アドレスの確認
  console.log(`Claim Signer Address: ${INITIAL_CLAIM_SIGNER_ADDRESS}`);

  // 2. コントラクトファクトリの取得
  const SolunaToken = await ethers.getContractFactory("SolunaToken");
  
  // 3. デプロイの実行（コンストラクタ引数を渡す）
  console.log("Deploying SolunaToken...");
  const solunaToken = await SolunaToken.deploy(INITIAL_CLAIM_SIGNER_ADDRESS);

  // 4. トランザクションの確認（デプロイ完了を待つ）
  await solunaToken.waitForDeployment();

  // 5. デプロイされたアドレスの表示
  const deployedAddress = await solunaToken.target;
  console.log(`✅ SolunaToken deployed to: ${deployedAddress}`);

  console.log("--- Deployment Finished ---");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});