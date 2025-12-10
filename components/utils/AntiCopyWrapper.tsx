// components/utils/AntiCopyWrapper.tsx

import React from 'react';

const handleContextMenu = (e: React.MouseEvent) => {
  // 右クリックメニューを無効化
  e.preventDefault(); 
};

export default function AntiCopyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div 
      onContextMenu={handleContextMenu} 
      className="select-none" // Tailwind CSSでテキスト選択を無効化
      style={{ userSelect: 'none' }} // ブラウザ標準のテキスト選択を無効化 (Fallback)
    >
      {children}
    </div>
  );
}