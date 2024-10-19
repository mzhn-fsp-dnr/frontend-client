"use client";
import { generate } from "@/api/tickets";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../components/button";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const generatePdf = async (ticket: string, date: string) => {
    await generate(ticket, date).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "ticket.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  };

  const ticket = searchParams.get("ticket") ?? "invalid";
  const date = searchParams.get("date") ?? "2024-10-19T19:31:51.422231";

  return (
    <section className="flex h-full flex-col gap-4 py-8">
      <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold text-cyan-700 first:mt-0">
        Номер талона
      </h2>
      <h1 className="my-2 text-center text-9xl font-bold">{ticket}</h1>
      <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold text-cyan-700 first:mt-0">
        Окошки: <span>1, 2, 3</span>
      </h2>
      <div className="mt-auto flex justify-center">
        <Button
          className="grow"
          onClick={async () => {
            await generatePdf(ticket, date);
            router.replace("/tos");
          }}
        >
          Распечатать
        </Button>
      </div>
    </section>
  );
}
