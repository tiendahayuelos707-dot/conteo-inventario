export type InventoryRow = { center:string; material:string; description:string; plu:string; quantity:number; size:string; color:string; colorDescription:string };
export type InventoryItem = InventoryRow & { key:string };

export function normalize(value: unknown) { return String(value ?? '').trim(); }
export function keyOf(r: InventoryRow) { return [r.center,r.material,r.size,r.color].join('||'); }

export function groupRows(rows: InventoryRow[]): InventoryItem[] {
  const map = new Map<string, InventoryItem>();
  for (const row of rows) {
    if (!row.material) continue;
    const key = keyOf(row);
    const current = map.get(key);
    if (current) current.quantity += Number(row.quantity) || 0;
    else map.set(key, { ...row, quantity:Number(row.quantity)||0, key });
  }
  return [...map.values()];
}

export function rowsFromSheet(rows: Record<string, unknown>[]): InventoryRow[] {
  return rows.map(r => ({
    center: normalize(r['E']), material: normalize(r['H']), description: normalize(r['I']),
    plu: normalize(r['M']), quantity: Number(r['O']) || 0, size: normalize(r['Q']),
    color: normalize(r['R']), colorDescription: normalize(r['S'])
  }));
}
