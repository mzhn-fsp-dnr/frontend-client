import client from "@/lib/axios";

export async function generate(ticket: string, date: string) {
  return await client.post(
    "/generate-ticket",
    {
      queueNumber: ticket,
      date,
    },
    { responseType: "blob" }
  );
}
