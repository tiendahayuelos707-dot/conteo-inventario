create table if not exists inventory_counts (
 id uuid primary key default gen_random_uuid(),
 inventory_id uuid not null,
 material text not null,
 center text not null,
 size text not null,
 color text not null,
 expected_quantity numeric not null default 0,
 physical_quantity numeric,
 updated_at timestamptz not null default now(),
 unique(inventory_id, material, center, size, color)
);
create table if not exists inventories (
 id uuid primary key default gen_random_uuid(),
 file_name text not null,
 center text,
 counted_at timestamptz not null default now(),
 created_at timestamptz not null default now()
);
