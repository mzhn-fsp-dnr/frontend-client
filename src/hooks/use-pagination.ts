import { useMemo } from "react";

export default function usePagination<T>(
  data: T[],
  page: number,
  perPage: number
) {
  const total = useMemo(
    () => Math.ceil(data.length / perPage),
    [data, perPage]
  );
  const items = useMemo(
    () => data.slice((page - 1) * perPage, page * perPage),
    [page, data]
  );
  const hasBack = page > 1;
  const hasNext = page < total;

  return {
    page,
    perPage,
    total,
    items,
    hasBack,
    hasNext,
  };
}
