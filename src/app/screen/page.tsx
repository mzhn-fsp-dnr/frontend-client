"use client";

import Image from "next/image";

import { get } from "@/api/queue";
import logo from "@/app/assets/images/logo.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CurrentTime from "@/components/util/current-time";
import { useQuery } from "@tanstack/react-query";
import OrgName from "./components/org-name";

export default function Page() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["queue"],
    queryFn: get,
    refetchInterval: 5000,
  });

  if (isError) return <>error</>;
  if (isLoading) return <>loading</>;

  const ticketsWithWindow = data?.filter((d) => d.window == null);

  return (
    <div className="flex h-full flex-col gap-6 py-8">
      <div className="flex items-center justify-between px-4">
        <Image src={logo} alt="Почта Донбасса" width={100} height={100} />

        <h1 className="text-right text-4xl font-bold tracking-tight text-blue-500 lg:text-6xl">
          Электронная очередь
        </h1>

        <div>
          <CurrentTime
            format={"HH:mm"}
            className="text-right text-4xl font-bold text-blue-500"
          />
          <CurrentTime
            format={"DD MMMM YYYY, dd"}
            className="text-right text-4xl font-bold text-blue-500"
          />
        </div>
      </div>
      <div className="grid h-full grid-cols-2 gap-2">
        <div>
          <Table>
            <TableHeader className="bg-blue-500">
              <TableRow>
                <TableHead className="p-6 text-center text-3xl font-bold text-white">
                  Клиент
                </TableHead>
                <TableHead></TableHead>
                <TableHead className="text-center text-3xl font-bold text-white">
                  Окошко
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ticketsWithWindow?.slice(0, 5).map((t) => (
                <TableRow>
                  <TableCell className="p-6 text-center text-3xl font-bold text-black">
                    {t.ticket_code}
                  </TableCell>
                  <TableCell className="p-6 text-center text-3xl font-bold text-black">
                    &gt;
                  </TableCell>
                  <TableCell className="p-6 text-center text-3xl font-bold text-black">
                    {t.window}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <Table>
            <TableHeader className="bg-blue-500">
              <TableRow>
                <TableHead className="p-6 text-center text-3xl font-bold text-white">
                  Клиент
                </TableHead>
                <TableHead></TableHead>
                <TableHead className="text-center text-3xl font-bold text-white">
                  Окошко
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ticketsWithWindow?.slice(5, 10).map((t) => (
                <TableRow>
                  <TableCell className="p-6 text-center text-3xl font-bold text-black">
                    {t.ticket_code}
                  </TableCell>
                  <TableCell className="p-6 text-center text-3xl font-bold text-black">
                    &gt;
                  </TableCell>
                  <TableCell className="p-6 text-center text-3xl font-bold text-black">
                    {t.window}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <OrgName />
    </div>
  );
}
