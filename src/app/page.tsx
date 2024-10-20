import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold tracking-tight lg:text-5xl">
        Выберите режим
      </h1>
      <div className="mt-5 space-x-4">
        <Button asChild>
          <Link href="/screen">Экран</Link>
        </Button>
        <Button asChild>
          <Link href="/tos">Терминал</Link>
        </Button>
      </div>
    </div>
  );
}
