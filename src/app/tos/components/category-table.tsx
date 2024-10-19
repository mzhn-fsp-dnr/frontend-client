import { create } from "@/api/queue";
import { Category } from "@/api/services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import Button from "./button";

export interface CategoryTableProps {
  items: Category[];
  prev?: string[];
  href_back?: string;
  href_forward?: string;
}

function CategoryButton({ prevS, item }: { prevS: string; item: Category }) {
  const router = useRouter();
  const doTicket = async () => {
    const result = (await create(item.id)).item;
    router.replace(
      `/tos/ticket?ticket=${result.ticket_code}&date=${result.creation_time}`
    );
  };

  if (item.children.length > 0) {
    return (
      <Button asChild>
        <Link href={`/tos/${prevS}/${item.id}`}>{item.name}</Link>
      </Button>
    );
  }

  return <Button onClick={async () => await doTicket()}>{item.name}</Button>;
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
        <CategoryButton key={index} item={item} prevS={prevS} />
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
