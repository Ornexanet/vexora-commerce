"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchModal = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-[5px] outline-none">
          <Search size={24} />
          <span className="font-medium text-lg md:block hidden">Search</span>
        </button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[800px] sm:py-20 py-10 sm:px-10 px-5"
      >
        <DialogHeader className="hidden">
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="text"
            placeholder="Search for products..."
            className="w-full py-6 pr-14 pl-6 rounded-full"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
          >
            <Search size={24} className="text-gray-500" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
