import React from "react";
import CardProj from "../CardProj";
import ProyectosGitHub from "@/app/Provider";

function ProjectsPage() {
  return (
    <div
      className="flex flex-col  lg:p-20"

    >
      <h1 className="text-4xl py-10">Proyectos</h1>
      <div className="ResponsiveMenu w-full ">
      
        {ProyectosGitHub.map((Pro) => (
          <CardProj
            key={Pro.id}
            title={Pro.title}
            description={Pro.description}
            img={Pro.img}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
