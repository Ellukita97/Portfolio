import React from "react";
import Image from "next/image";
import img from "../../img/img_avatar.png";
import ButtonTecnology from "../button/ButtonTecnology";
function About() {
  return (
    <div className="flex flex-col items-center  justify-center py-0 lg:pt-48">
      <div className="flex flex-col lg:max-w-5xl lg:max-h-2xl max-h-xl max-w-xl">
        <div className="flex flex-col lg:flex-row  rounded-t-full lg:rounded-none ">
          <Image src={img} alt="" className="max-h-full w-full lg:h-96 my-2 lg:my-0 rounded-full lg:rounded-none"  />
          <div className="flex flex-col justify-center p-9 lg:p-16 bg-slate-800">
            <h3 className="mb-5 text-3xl">Soy Lucas Rodrigues.</h3>
            <p className="box-border text-slate-300">
              Un analista programador uruguayo que busca una oportunidad para
              aplicar mis conocimientos de programador con el fin de beneficiar
              a una organización y desarrollarme de forma profesional y
              personal.
            </p>
            <span className="text-xl mt-5">Tecnologias trabajadas:</span>
            <div>
              <ButtonTecnology />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
