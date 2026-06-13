// import { PiStarFull, PiStarHalf } from "@/lib/icons";
// import { Star } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

interface PropsType {
  star: number;
  iconSize?: string;
  className?: string;
}

const Rating = ({ star, iconSize, className }: PropsType) => {
  return (
    <ul className={cn("flex items-center gap-[5px]", className)}>
      {Array.from({ length: 5 }).map((elem, index) => {
        const number = index + 0.5;
        return (
          <li key={index} className="text-blue">
            {star >= index + 1 ? (
              <Star fill="#1279F2" className={cn("size-5", iconSize)} />
            ) : star >= number ? (
              <StarHalf fill="#1279F2" className={cn("size-5", iconSize)} />
            ) : (
              <Star className={cn("size-5", iconSize)} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Rating;
