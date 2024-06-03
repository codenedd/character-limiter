import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col py-2 text-center text-xs md:text-lg">
      <div className="flex gap-2 justify-center items-center px-2">
        <Link className="hover:text-primary-color" href={"/"}>
          Character Limiter
        </Link>
        <BsDot />
        <Link className="hover:text-primary-color" href={"how-it-works"}>
          How it works?
        </Link>
        <BsDot />
        <Link className="hover:text-primary-color" href={"https://github.com/codenedd/character-limiter"}>
          Repository
        </Link>
      </div>
      <div>codened &copy; 2024</div>
    </footer>
  );
};

export default Footer;
