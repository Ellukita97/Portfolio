import React from "react";
import {
  CSharp,
  javaScript,
  HTML,
  CSS,
  MySQL,
  PostgreSQL,
  ReactIcon,
  ReactNative,
  Next,
  Express,
  Asp,
  Blazor,
  Boostrap,
  Tailwind,
} from "../icons";
function ButtonTecnology() {
  const technology = [
    CSharp,
    javaScript,
    HTML,
    CSS,
    MySQL,
    PostgreSQL,
    ReactIcon,
    ReactNative,
    Next,
    Express,
    Asp,
    Blazor,
    Boostrap,
    Tailwind,
  ];

  return (
    <div>
      <ul className="flex flex-wrap max-w-6xl gap-5 my-5">
        {technology.map((tech) => (
          <button
            key={tech}
            className=" flex items-center text-6xl justify-center bg-indigo-600 rounded-full"
          >
            {tech()}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default ButtonTecnology;
