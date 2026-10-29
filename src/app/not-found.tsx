import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center container">
      <h2 className="xl:text-[300px] lg:text-[200px] text-[150px] font-extrabold text-[#B0B5BB] xl:leading-[1] lg:leading-[1] leading-[1]">
        404
      </h2>
      <p className="lg:text-[52px] text-[28px] font-extrabold">
        Oj! Sidan kunde inte hittas
      </p>
      <p className="lg:text-[28px] text-xl text-light-dark font-medium mt-5">
        Sidan du söker finns inte eller kan ha flyttats.
      </p>
      <Button asChild className="lg:mt-10 mt-7">
        <Link href="/">Till startsidan</Link>
      </Button>
    </div>
  );
}
