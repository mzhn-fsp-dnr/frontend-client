import client from "@/lib/axios";

export interface Window {
  id: string;
  name: string;
}

export async function byId(id: string) {
  return (await client.get(`/windows/windows/${id}`)).data as Window;
}
