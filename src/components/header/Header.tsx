import Link from "next/link";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-3xl lg:text-4xl">
          character limiter
          <span className="block text-sm uppercase">for socialmedia</span>
        </h1>
        <Link href={"https://github.com/codenedd"} target="_blank" className="text-4xl hover:text-primary-color cursor-pointer transition-all">
          <FaGithubSquare />
        </Link>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-primary-color to-99%"></div>
    </header>
  );
};

export default Header;
