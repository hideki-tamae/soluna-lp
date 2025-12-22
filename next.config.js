// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 💡 turbopackの設定を削除し、Next.jsに任せる
  // ただし、警告が出ているため、Next.jsの標準的な設定では解決しない可能性がある。
  // 今回は、この設定を削除し、シンプルな状態で再テストします。

};

module.exports = nextConfig;