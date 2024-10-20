import client from "@/lib/axios";

export interface Organization {
  id: string;
  name: string;
  address: string;
}

export async function current(): Promise<Organization> {
  const org_id = process.env.NEXT_PUBLIC_ORG_ID;
  return (await client.get(`/offices/offices/${org_id}`)).data;
}
