// helpers (page.tsx の上の方に追加)
const fmtDate = (v: string | Date | null | undefined) => {
  if (!v) return '-';
  const s = typeof v === 'string' ? v.replace(' ', 'T') : (v as any);
  const d = new Date(s);
  if (isNaN(d.getTime())) return '-';
  return d.toLocaleString('ja-JP', { hour12: false });
};

