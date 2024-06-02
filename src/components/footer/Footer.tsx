import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 py-2 text-center">
      <div className="flex gap-2 justify-center items-center">
        <Link className="hover:text-primary-color" href={"/"}>
          Project Repository
        </Link>
        <BsDot />
        <Link className="hover:text-primary-color" href={"how-it-works"}>
          How it works?
        </Link>
      </div>
      <div>codened &copy; 2024</div>
    </footer>
  );
};

export default Footer;
