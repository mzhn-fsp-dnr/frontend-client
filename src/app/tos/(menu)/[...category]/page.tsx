"use client";

import { getCategory } from "@/api/services";
import usePagination from "@/hooks/use-pagination";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Button from "../../components/button";
import CategoryTable from "../../components/category-table";

export interface PageParams {
  params: {
    category: string[];
  };
}

export default function Page({ params }: PageParams) {
  const searchParams = useSearchParams();
  const categoryId = parseInt(params.category[0]);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["category", categoryId],
    queryFn: () => getCategory(categoryId),
    placeholderData: { id: -1, name: "", children: [], parent: null },
  });

  const page = useMemo(
    () => parseInt(searchParams.get("page") ?? "1"),
    [searchParams]
  );
  const paginated = usePagination(data?.children!, page, 4);

  if (isError) return <>error</>;
  if (isLoading) return <>loading</>;

  return (
    <section className="flex h-full flex-col gap-4 py-8">
      <div className="text-cyan-700">
        <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold first:mt-0">
          Категория: {data!.name}
        </h2>
      </div>
      <CategoryTable
        items={paginated.items}
        href_forward={paginated.hasNext ? `?page=${page + 1}` : undefined}
        href_back={paginated.hasBack ? `?page=${page - 1}` : undefined}
      />
      <div className="mt-auto flex justify-center gap-2">
        <Button asChild>
          <Link href={`/tos/${data?.parent?.id ?? ""}`}>Назад</Link>
        </Button>
      </div>
    </section>
  );
}
