"use client";

import { all } from "@/api/services";
import usePagination from "@/hooks/use-pagination";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Button from "../components/button";
import CategoryTable from "../components/category-table";

export default function Page() {
  const searchParams = useSearchParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["category"],
    queryFn: all,
    placeholderData: [],
  });

  const page = useMemo(
    () => parseInt(searchParams.get("page") ?? "1"),
    [searchParams]
  );
  const paginated = usePagination(data ?? [], page, 4);

  if (isError) return <>error</>;
  if (isLoading) return <>loading</>;

  return (
    <section className="flex h-full flex-col gap-4 py-8">
      <CategoryTable
        items={paginated.items}
        href_forward={paginated.hasNext ? `?page=${page + 1}` : undefined}
        href_back={paginated.hasBack ? `?page=${page - 1}` : undefined}
      />
      <div className="mt-auto flex justify-center gap-2">
        <Button asChild>
          <Link href="/tos/reservation/get">Предварительная запись</Link>
        </Button>
        <Button asChild>
          <Link href="/tos/tg">Регистрация Telegram</Link>
        </Button>
      </div>
    </section>
  );
}
