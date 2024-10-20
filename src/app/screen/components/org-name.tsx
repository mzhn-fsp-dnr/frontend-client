import { current } from "@/api/orgs";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";

export default function OrgName({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["org"],
    queryFn: current,
  });

  if (isLoading || isError) return <></>;
  return (
    <div className={cn("text-center font-bold", className)} {...props}>
      {data?.name}
      <br />
      {data?.address}
    </div>
  );
}
