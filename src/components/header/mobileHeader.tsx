import Link from "next/link";
import MobileNavSidebar from "./mobileNavSidebar";
import { HeartIcon, ShoppingBag, User } from "lucide-react";

const MobileHeader = () => {
  return (
    <div className="xl:hidden z-50 fixed bottom-0 left-0 bg-background w-full py-3">
      <div className="container">
        <ul className="flex justify-between items-center px-4">
          <li className="cursor-pointer">
            <MobileNavSidebar />
          </li>
          <li className="cursor-pointer">
            <Link href="/wishlist" aria-label="Öppna önskelistan">
           <HeartIcon size={24} aria-hidden="true" />
           </Link>

          </li>
          <li className="cursor-pointer">
            <Link href={"/shop"}>
              <ShoppingBag size={24} />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/dashboard/orders"}>
              <User size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;
