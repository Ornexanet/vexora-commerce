import { ArrowRight } from "@/lib/icons";
import Link from "next/link";
import Title from "../ui/title";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  currentPageName: string;
  praentPageName?: string;
  praentPageHref?: string;
}
const PageHeader = ({
  title,
  currentPageName,
  praentPageName,
  praentPageHref,
}: PageHeaderProps) => {
  return (
    <div className="bg-[#F3F5F8] py-7.5">
      <div className="container flex items-center lg:gap-12.5 gap-5">
        <Title asChild size="36" className="font-bold">
          <h3>{title}</h3>
        </Title>
        <div className="flex items-center flex-wrap gap-[5px]">
          <Link
            href={"/"}
            className="text-lg text-light-dark leading-normal hover:text-blue transition-all duration-500"
          >
            Home
          </Link>
          {praentPageName && (
            <>
              <span className="size-6 flex items-center justify-center">
                <ArrowRight className="size-3" />
              </span>
              <Link
                href={praentPageHref || "#"}
                className={cn(
                  "text-lg leading-normal text-light-dark hover:text-blue transition-all duration-500"
                )}
              >
                {praentPageName}
              </Link>
            </>
          )}
          {currentPageName && (
            <>
              <span className="size-6 flex items-center justify-center">
                <ArrowRight className="size-3" />
              </span>
              <span className="text-lg leading-normal">{currentPageName}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
