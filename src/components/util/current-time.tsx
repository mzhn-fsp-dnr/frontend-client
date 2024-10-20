"use client";

import { cn } from "@/lib/utils";
import moment from "moment";
import "moment/locale/ru";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
  format?: string;
};

function formatTime(
  time: Date,
  format: Props["format"] = "HH:mm:ss DD.MM.YYYY"
) {
  return moment(time).format(format);
}

export default function CurrentTime({ className, format }: Props) {
  const [time, setTime] = useState(new Date());
  const classes = cn("text-gray-400", className);

  moment.locale("ru");

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 500);
    return () => clearInterval(id);
  });

  return (
    <p className={classes} suppressHydrationWarning>
      {formatTime(time, format)}
    </p>
  );
}
