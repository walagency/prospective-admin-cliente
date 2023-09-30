"use client";

import { useState } from "react";
import { db } from "@/firebase";
import { doc, setDoc, collection } from "firebase/firestore";

export default function FormularioCrearUsuario({ toggleTexto }) {
  const handleTextoClick = () => {
    toggleTexto(); // Llama a la función toggleTexto para cambiar el estado
  };


  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cellphone, setCellPhone] = useState("");
  const [city, setCity] = useState("");
  const [document, setDocument] = useState("");

  // Manejar comportamiento del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Function Firebase Firestore para guardar la información en Firestore
    try {
      const userRef = doc(collection(db, "users"));
      await setDoc(userRef, {
        firstName,
        lastName,
        cellphone,
        city,
        document,
      });

      // Restablecer los valores a una cadena vacía
      alert("Información guardada en correctamente");
      setFirstName("");
      setLastName("");
      setCellPhone("");
      setCity("");
      setDocument("");
      window.location.reload();
    } catch (error) {
      console.error(" :", error);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-around"
      style={{ minHeight: "608px" }}
    >
      <div className="p-5" style={{ minWidth: "525px", maxWidth: "625px" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputLastName" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputCellphone" className="form-label">
              Teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputCellphone"
              aria-describedby="cellphoneHelp"
              value={cellphone}
              onChange={(e) => setCellPhone(e.target.value)}
              required
            />
            <div id="cellphoneHelp" className="form-text">
              No compartiremos tu información personal
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputCity" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputCity"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputDocument" className="form-label">
              Documento
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputDocument"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              required
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Acepto terminos y condiciones
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button className="btn btn-danger" onClick={handleTextoClick}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}