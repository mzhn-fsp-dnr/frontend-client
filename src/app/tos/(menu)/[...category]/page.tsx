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
  const categoryPath = params.category;

  const { isLoading, isError, data } = useQuery({
    queryKey: ["category", categoryPath[categoryPath.length - 1]],
    queryFn: () => getCategory(categoryPath),
    placeholderData: { id: "", name: "", children: [], parent: null },
  });

  const page = useMemo(
    () => parseInt(searchParams.get("page") ?? "1"),
    [searchParams]
  );
  const paginated = usePagination(data?.children!, page, 4);
  const prevS = useMemo(
    () => categoryPath.slice(0, categoryPath.length - 1).join("/"),
    []
  );

  if (isError) return <>error</>;
  if (isLoading) return <>loading</>;

  return (
    <section className="flex h-full flex-col gap-4 py-4">
      <div className="text-blue-500">
        <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold first:mt-0">
          Категория: {data!.name}
        </h2>
      </div>
      <CategoryTable
        items={paginated.items}
        prev={categoryPath}
        href_forward={paginated.hasNext ? `?page=${page + 1}` : undefined}
        href_back={paginated.hasBack ? `?page=${page - 1}` : undefined}
      />
      <div className="mt-auto flex justify-center gap-2">
        <Button asChild>
          <Link href={`/tos/${prevS}/${data?.parent?.id ?? ""}`}>Назад</Link>
        </Button>
      </div>
    </section>
  );
}
