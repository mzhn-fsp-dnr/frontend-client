"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Link from "next/link";
import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Button from "../../components/button";

export default function Page() {
  const [value, setValue] = useState("");
  const [keyboard, setKeyboardVisible] = useState(false);

  return (
    <section className="flex h-full flex-col items-center gap-4 py-8">
      <InputOTP
        maxLength={7}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        autoFocus
        value={value}
        onFocus={() => setKeyboardVisible(true)}
        onChange={(value) => setValue(value)}
        onComplete={() => setKeyboardVisible(false)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-24 text-3xl" />
          <InputOTPSlot index={1} className="size-24 text-3xl" />
          <InputOTPSlot index={2} className="size-24 text-3xl" />
          <InputOTPSlot index={3} className="size-24 text-3xl" />
          <InputOTPSlot index={4} className="size-24 text-3xl" />
          <InputOTPSlot index={5} className="size-24 text-3xl" />
          <InputOTPSlot index={6} className="size-24 text-3xl" />
        </InputOTPGroup>
      </InputOTP>

      <div className="mt-auto flex w-full flex-col gap-4">
        <div className={cn("hidden", keyboard && "block")}>
          <Keyboard
            layout={{
              default: ["1 2 3", "4 5 6", "7 8 9", "Закрыть 0 Стереть"],
            }}
            onKeyPress={(key) => {
              if (key == "Стереть") {
                setValue(value.slice(0, value.length - 1));
              } else if (key == "Закрыть") {
                setKeyboardVisible(false);
              } else {
                setValue(value + key);
              }
            }}
          />
        </div>
        {!keyboard && (
          <>
            <Button className="grow" disabled={value.length < 7}>
              Выдать талон
            </Button>
            <Button className="grow" asChild>
              <Link href="/tos">Назад</Link>
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
