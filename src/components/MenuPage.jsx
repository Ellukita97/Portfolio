import React from "react";
import { Github,Linkedin,CV } from "./icons";

function MenuPage() {
  return (
    <div className="fixed bottom-0 border-2 border-cyan-400 m-5 rounded-br-full rounded-tl-full py-5 hidden space-x-8 lg:flex">
      <ul className="flex flex-col gap-5 m-3">
        <li>
          <a
            href=""
            className="flex justify-center items-center w-16 h-16 hover:scale-105 active:scale-95  rounded-full text-4xl  bg-indigo-900"
          >
            <Github/>
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex justify-center items-center w-16 h-16 hover:scale-105 active:scale-95 rounded-full text-4xl  bg-sky-500"
          >
            <Linkedin/> 
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex justify-center items-center w-16 h-16 hover:scale-105 active:scale-95 rounded-full text-4xl  bg-slate-500"
          >
            <CV/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuPage;
