"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/button";

export default function Page() {
  const [value, setValue] = useState("");

  return (
    <section className="flex h-full flex-col items-center gap-4 py-8">
      <InputOTP
        maxLength={5}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        autoFocus
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-24 text-3xl" />
          <InputOTPSlot index={1} className="size-24 text-3xl" />
          <InputOTPSlot index={2} className="size-24 text-3xl" />
          <InputOTPSlot index={3} className="size-24 text-3xl" />
          <InputOTPSlot index={4} className="size-24 text-3xl" />
        </InputOTPGroup>
      </InputOTP>
      <div className="mt-auto flex w-full flex-col gap-4">
        <Button className="grow" disabled={value.length < 5}>
          Выдать талон
        </Button>
        <Button className="grow" asChild>
          <Link href="/tos">Назад</Link>
        </Button>
      </div>
    </section>
  );
}
