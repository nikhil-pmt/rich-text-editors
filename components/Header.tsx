import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-around items-center border-b-2 border-gray-100 p-2 max-w-6xl mx-auto">
      <Link
        href={"/"}
        className="p-1 hover:cursor-pointer hover:scale-95 duration-300 transform"
      >
        <HomeIcon />
      </Link>
      <Link
        href={"/novel"}
        className="p-1 hover:cursor-pointer hover:scale-95 duration-300 transform"
      >
        Novel
      </Link>
      <Link
        href={"/quill"}
        className="p-1 hover:cursor-pointer hover:scale-95 duration-300 transform"
      >
        Quill
      </Link>
      <Link
        href={"/blocknote"}
        className="p-1 hover:cursor-pointer hover:scale-95 duration-300 transform"
      >
        BlockNote
      </Link>
    </div>
  );
};

export default Header;
