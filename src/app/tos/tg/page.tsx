"use client";
import Image from "next/image";
import Button from "../components/button";

import qr from "@/app/assets/images/qr.png";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex h-full flex-col items-center gap-4 py-8">
      <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold text-cyan-700 first:mt-0">
        Отсканируйте QR-код с помощью Вашего мобильного устройства
      </h2>
      <Image src={qr} alt="" width={350} height={350} />
      <div className="mt-auto flex w-full justify-center">
        <Button className="grow" asChild>
          <Link href={"/tos"}>Назад</Link>
        </Button>
      </div>
    </section>
  );
}
