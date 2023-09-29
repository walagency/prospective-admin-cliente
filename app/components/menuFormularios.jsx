"use client";

import React, { useState } from 'react';
import FormularioCrearUsuario from "./formularioRegistro";
import FormularioSubirFactura from "./formularioAgregarFactura";
import imagen1 from '../assets/img/imagen1.jpg'
import imagen2 from '../assets/img/imagen2.jpg'
import Image from 'next/image';

const MenuFormularios = () => {
  const [mostrarFormularioCrearUsuario, setMostrarFormularioCrearUsuario] = useState(false);
  const [mostrarFormularioSubirFactura, setMostrarFormularioSubirFactura] = useState(false);
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [mostrarComponente2, setMostrarComponente2] = useState(true);

  const toggleTexto = () => {
    setMostrarFormularioCrearUsuario(!mostrarFormularioCrearUsuario);
    setMostrarComponente(!mostrarComponente);
  };

  const toggleTexto2 = () => {
    setMostrarFormularioSubirFactura(!mostrarFormularioSubirFactura);
    setMostrarComponente2(!mostrarComponente2);
  };

  return (
    <>


      <div>
        {!mostrarFormularioCrearUsuario && mostrarComponente2 && (
          <Image
            src={imagen1}
            alt="Imagen"
            style={{ cursor: 'pointer' }}
            onClick={toggleTexto}
          />
        )}
        {mostrarFormularioCrearUsuario && <FormularioCrearUsuario toggleTexto={toggleTexto} />}

      </div>

      <div>
        {!mostrarFormularioSubirFactura && mostrarComponente && (
          <Image
            src={imagen2}
            alt="Imagen"
            style={{ cursor: 'pointer' }}
            onClick={toggleTexto2}
          />
        )}
        {mostrarFormularioSubirFactura && <FormularioSubirFactura toggleTexto2={toggleTexto2} />}
      </div>

    </>
  );
};

export default MenuFormularios;