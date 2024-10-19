import * as UI from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ButtonProps extends UI.ButtonProps {}

export default function Button({ className, ...props }: ButtonProps) {
  const internalClass =
    "bg-gradient-to-b from-blue-300 to-blue-500 text-white py-8 px-4 text-xl font-bold rounded-lg hover:opacity-80";
  return (
    <UI.Button
      className={cn(internalClass, className)}
      variant={"empty"}
      size={"empty"}
      {...props}
    />
  );
}
