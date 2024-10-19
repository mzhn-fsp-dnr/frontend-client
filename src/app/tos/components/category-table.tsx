import { Category } from "@/api/services";
import Link from "next/link";
import { useMemo } from "react";
import Button from "./button";

export interface CategoryTableProps {
  items: Category[];
  prev?: string[];
  href_back?: string;
  href_forward?: string;
}

export default function CategoryTable({
  items,
  prev = [],
  href_forward,
  href_back,
}: CategoryTableProps) {
  const prevS = useMemo(() => prev.join("/"), []);
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <Button key={index} asChild>
          <Link href={`/tos/${prevS}/${item.id}`}>{item.name}</Link>
        </Button>
      ))}
      {href_back && (
        <Button asChild>
          <Link href={href_back}>Назад</Link>
        </Button>
      )}
      {href_forward && (
        <Button asChild>
          <Link href={href_forward}>Вперёд</Link>
        </Button>
      )}
    </div>
  );
}
