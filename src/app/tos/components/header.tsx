import Image from "next/image";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import logo from "../../assets/images/logo.png";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Header({ className, children, ...props }: HeaderProps) {
  const internalClass = "flex items-center justify-between  p-4";
  return (
    <header className={cn(internalClass, className)} {...props}>
      <Image src={logo} alt="Почта Донбасса" width={64} height={64} />
      <h1 className="text-center text-4xl font-bold tracking-tight lg:text-5xl">
        {children}
      </h1>
      <Image src={logo} alt="Почта Донбасса" width={64} height={64} />
    </header>
  );
}
