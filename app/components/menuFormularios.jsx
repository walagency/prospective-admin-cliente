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
  const [mostrarImagen1, setMostrarImagen1] = useState(true);
  const [mostrarImagen2, setMostrarImagen2] = useState(true);

  const toggleTexto = () => {
    setMostrarFormularioCrearUsuario(!mostrarFormularioCrearUsuario);
    setMostrarImagen1(!mostrarImagen1);
  };

  const toggleTexto2 = () => {
    setMostrarFormularioSubirFactura(!mostrarFormularioSubirFactura);
    setMostrarImagen2(!mostrarImagen2);
  };

  return (
    <>

    
<div>
        {!mostrarFormularioSubirFactura && mostrarImagen1 && (
          <Image
            src={imagen1}
            alt="Imagen1"
            style={{ cursor: 'pointer' }}
            onClick={toggleTexto2}
          />
        )}
        {mostrarFormularioSubirFactura && <FormularioSubirFactura toggleTexto2={toggleTexto2} />}
      </div>



      <div>
        {!mostrarFormularioCrearUsuario && mostrarImagen2 && (
          <Image
            src={imagen2}
            alt="Imagen2"
            style={{ cursor: 'pointer' }}
            onClick={toggleTexto}
          />
        )}
        {mostrarFormularioCrearUsuario && <FormularioCrearUsuario toggleTexto={toggleTexto} />}
      </div>





    </>
  );
};

export default MenuFormularios;