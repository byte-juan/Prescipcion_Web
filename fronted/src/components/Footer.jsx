import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
<div className="md:mx-10">
  <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
    
    {/* lado izquierdo */}
    <div>
      <img className="mb-5 w-40" src={assets.logo} alt="" />
      <p className="w-full md:w-2/3 text-gray-600 leading-6">
        Conectamos a pacientes con especialistas médicos de confianza de forma
        rápida, segura y sin complicaciones. Agenda tu cita en línea en pocos
        minutos y recibe atención de calidad desde cualquier lugar.
      </p>
    </div>

    {/* Centro  */}
    <div>
      <p className="text-xl font-medium mb-5">EMPRESA</p>
      <ul className="flex flex-col gap-2 text-gray-600">
        <li>Home</li>
        <li>Acerca de Nosotros</li>
        <li>Contáctanos</li>
        <li>Política de Privacidad</li>
      </ul>
    </div>

    {/* lado derecho */}
    <div>
      <p className="text-xl font-medium mb-5">PONTE EN CONTACTO</p>
      <ul className="flex flex-col gap-2 text-gray-600">
        <li>+51 958-662-651</li>
        <li>doctorhouse@gmail.com</li>
      </ul>
    </div>

  </div>

  {/* ------------ */}
  <div>
    <hr className="border-gray-300" />
    <p className="py-5 text-sm text-center">
      Copyright 2026 ©  Juan Ampudia Pozo
    </p>
  </div>
</div>

  );
};

export default Footer;
