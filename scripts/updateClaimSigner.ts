import { ethers } from "hardhat";

// 🚨 【修正必須】デプロイ済み SolunaToken のアドレスに置き換えてください
const DEPLOYED_TOKEN_ADDRESS = "0x1d8bb0A90D3706e0c24F8e571a7601C534A6334F";

// 🚨 【修正必須】実際に署名を行うバックエンドAPIのウォレットアドレスに置き換えてください
const NEW_CLAIM_SIGNER_ADDRESS = "0xC3Cd36f1165bD474d31F49D53410262C48f993bC"; 

async function main() {
  console.log("--- Claim Signer Update Started ---");

  // 1. コントラクトインスタンスを取得
  const SolunaToken = await ethers.getContractFactory("SolunaToken");
  const solunaToken = SolunaToken.attach(DEPLOYED_TOKEN_ADDRESS);

  // 2. 現在のOwner（デプロイに使用したアカウント）を取得
  const [deployer] = await ethers.getSigners();
  console.log(`Current Owner Address: ${deployer.address}`);
  console.log(`New Claim Signer Address: ${NEW_CLAIM_SIGNER_ADDRESS}`);

  // 3. setClaimSigner関数を実行 (Ownerのみ実行可能)
  console.log("Updating Claim Signer address...");
  const tx = await solunaToken.setClaimSigner(NEW_CLAIM_SIGNER_ADDRESS);
  await tx.wait(); // トランザクション完了を待つ

  // 4. 更新の確認
  const currentSigner = await solunaToken.claimSigner();
  console.log(`✅ Claim Signer updated successfully to: ${currentSigner}`);
  
  if (currentSigner.toLowerCase() !== NEW_CLAIM_SIGNER_ADDRESS.toLowerCase()) {
    console.error("❌ ERROR: Signer address verification failed.");
  }
  
  console.log("--- Claim Signer Update Finished ---");
}

main().catch((error) => {
  console.error(error);
  PRIVATE_KEY="0x9bf8c6ffefe203adc62143c946adf37bdadf75688a491ec75da4d98b1abafef4"
});