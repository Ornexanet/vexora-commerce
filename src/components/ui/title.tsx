import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";

const titleVariants = cva("", {
  variants: {
    size: {
      "28": "text-[clamp(1.25rem,1.1048rem+0.6452vw,1.75rem)] font-bold leading-normal",
      "36": "text-[clamp(1.875rem,1.7661rem+0.4839vw,2.25rem)] font-extrabold leading-normal",
      "42": "text-[clamp(1.375rem,1.0121rem+1.6129vw,2.625rem)] font-extralight leading-normal",
      "52": "text-[clamp(1.75rem,1.3145rem+1.9355vw,3.25rem)] font-extrabold leading-normal",
      "60": "text-[clamp(2.25rem,1.8145rem+1.9355vw,3.75rem)] font-bold leading-[120%]",
      "80": "text-[clamp(2.25rem,1.4516rem+3.5484vw,5rem)] font-bold leading-[120%]",
    },
  },
  defaultVariants: {
    size: "52",
  },
});

const Title = ({
  children,
  className,
  size,
  asChild,
}: {
  children: ReactNode;
  className?: string;
  size?: "80" | "60" | "52" | "42" | "36" | "28";
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp className={cn(titleVariants({ size, className }))}>{children}</Comp>
  );
};

export default Title;
