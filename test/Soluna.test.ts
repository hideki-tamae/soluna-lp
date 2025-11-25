import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";



// あなたのコントラクト名に合わせて変更してください（例: "SolunaToken"）
const CONTRACT_NAME = "SolunaToken"; 

describe("🌑 SOLUNA Smart Contract Test", function () {
  
  // 毎回クリーンな状態でテストするためのフィクスチャ
  async function deploySolunaFixture() {
    // 1. アカウントの取得（Ownerと一般ユーザー）
    const [owner, otherAccount] = await ethers.getSigners();

    // 2. コントラクトのデプロイ
    const Soluna = await ethers.getContractFactory(CONTRACT_NAME);
    const soluna = await Soluna.deploy(); // 引数が必要な場合はここに入れる

    return { soluna, owner, otherAccount };
  }

  // --- 基礎部分のテスト ---
  describe("Deployment & Metadata", function () {
    it("Should set the right owner", async function () {
      const { soluna, owner } = await loadFixture(deploySolunaFixture);
      expect(await soluna.owner()).to.equal(owner.address);
    });

    it("Should have correct name and symbol", async function () {
      const { soluna } = await loadFixture(deploySolunaFixture);
      // ※実際のコントラクトの設定値に合わせて書き換えてください
      expect(await soluna.name()).to.equal("SOLUNA"); 
      expect(await soluna.symbol()).to.equal("SLN");
    });
  });

  // --- トークン機能のテスト（Claimフローの基礎） ---
  describe("Transactions & Minting", function () {
    it("Should allow owner to mint tokens (if applicable)", async function () {
      const { soluna, owner, otherAccount } = await loadFixture(deploySolunaFixture);
      
      // Mint機能がある場合のテスト例（関数名は実際のものに合わせて修正）
      // await soluna.mint(otherAccount.address, ethers.parseEther("100"));
      // expect(await soluna.balanceOf(otherAccount.address)).to.equal(ethers.parseEther("100"));
    });

    it("Should fail if non-owner tries to mint", async function () {
      const { soluna, otherAccount } = await loadFixture(deploySolunaFixture);
      
      // Ownableの制限がかかっているかチェック
      // await expect(soluna.connect(otherAccount).mint(otherAccount.address, 100))
      //   .to.be.revertedWithCustomError(soluna, "OwnableUnauthorizedAccount");
    });
  });
  
  // --- ここから独自のロジック（Claimなど）を追加 ---
});