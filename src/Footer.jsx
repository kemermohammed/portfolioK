import React from "react";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-stone-800 h-40 flex items-center flex-col sm:flex-row justify-center gap-4 sm:justify-between text-stone-50 px-8 font-bold md:px-[20%]">
      <span className=" text-center">
        Copyright &copy; 2024. All rights are reserved
      </span>
      <Icon />
    </footer>
  );
}
