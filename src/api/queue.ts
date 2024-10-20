import client from "@/lib/axios";

export interface Ticket {
  department_id: string;
  window: null;
  id: string;
  creation_time: string;
  start_time: null;
  ticket_code: string;
  status: number;
  ticket_type: number;
  date_pre_reg: null;
  employee: null;
  end_time: null;
}

export async function create(service_id: string) {
  const org_id = process.env.NEXT_PUBLIC_ORG_ID;
  return (
    await client.post(`/queue/department/${org_id}/queue`, {
      service_id,
      ticket_type: 0,
    })
  ).data as { message: string; item: Ticket };
}

export async function get(): Promise<Ticket[]> {
  const org_id = process.env.NEXT_PUBLIC_ORG_ID;
  return (await client.get(`/queue/department/${org_id}/queue/current`)).data;
}

export async function prereg(service_id: string) {
  const org_id = process.env.NEXT_PUBLIC_ORG_ID;
  return (
    await client.post(`/queue/department/${org_id}/queue`, {
      service_id,
      ticket_type: 1,
    })
  ).data as { message: string; item: Ticket };
}
