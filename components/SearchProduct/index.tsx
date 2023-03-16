import Image from "next/image";
import searchIcon from "@/assets/searchIcon.png";

export default function SearchProduct({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-72 h-10 bg-gray-400 mt-5 relative rounded-3xl border">
        <input
          type="text"
          onChange={onChange}
          placeholder="Search product"
          className="flex-1 outline-none border-none rounded-3xl px-5"
        />
        <Image
          alt="search icon"
          src={searchIcon}
          width={28}
          height={24}
          className="absolute right-2 top-1"
        />
      </div>
    </div>
  );
}
