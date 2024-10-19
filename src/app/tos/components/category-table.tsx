import { Category } from "@/api/services";
import Link from "next/link";
import Button from "./button";

export interface CategoryTableProps {
  items: Category[];
  href_back?: string;
  href_forward?: string;
}

export default function CategoryTable({
  items,
  href_forward,
  href_back,
}: CategoryTableProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <Button key={index} asChild>
          <Link href={`/tos/${item.id}`}>{item.name}</Link>
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
