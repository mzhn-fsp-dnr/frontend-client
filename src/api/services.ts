import client from "@/lib/axios";

export interface Category {
  id: string;
  name: string;
  children: Category[];
  parent: Category | null;
}

export async function all(): Promise<Category[]> {
  const org_id = process.env.NEXT_PUBLIC_ORG_ID;
  return await (
    await client.get(`/offices/offices/${org_id}`)
  ).data.services;
}

export async function getCategory(ids: string[]): Promise<Category> {
  let arr = await all();
  let service: Category;

  for (let i = 0; i < ids.length; i++) {
    service = arr.find((s) => s.id == ids[i])!;
    arr = service.children;
  }
  return service!;
}
