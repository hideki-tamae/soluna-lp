// components/utils/AntiCopyWrapper.tsx

'use client'; // 👈 これを追加！

import React from 'react';

const handleContextMenu = (e: React.MouseEvent) => {
  // 右クリックメニューを無効化
  e.preventDefault(); 
};

export default function AntiCopyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div 
      onContextMenu={handleContextMenu} 
      className="select-none" 
      style={{ userSelect: 'none' }} 
    >
      {children}
    </div>
  );
}
