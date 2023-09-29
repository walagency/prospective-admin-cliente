"use client";

import { useState } from "react";
import { db } from "@/firebase";
import { doc, setDoc, collection } from "firebase/firestore";

export default function FormularioSubirFactura({ toggleTexto2 }) {
	const handleTextoClick = () => {
    toggleTexto2(); // Llama a la función toggleTexto para cambiar el estado
  };
	const [document, setDocument] = useState("");
	const [invoiceDate, setInvoiceDate] = useState("");
	const [storeNit, setStoreNit] = useState("");
	const [invoiceNumber, setInvoiceNumber] = useState("");
	const [invoiceValue, setInvoiceValue] = useState("");

	// Manejar comportamiento del formulario
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Function Firebase Firestore para guardar la información en Firestore
		try {
			const userRef = doc(collection(db, "users"));
			await setDoc(userRef, {
				document,
				invoiceDate,
				storeNit,
				invoiceNumber,
				invoiceValue,
			});

			// Restablecer los valores a una cadena vacía
			alert("Información guardada en correctamente");
			setDocument("");
			setInvoiceDate("");
			setStoreNit("");
			setInvoiceNumber("");
			setInvoiceValue("");
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

					<div className="mb-3">
						<label htmlFor="exampleInputInvoiceDate" className="form-label">
							Fecha de la compra
						</label>
						<input
							type="date"
							className="form-control"
							id="exampleInputInvoiceDate"
							value={invoiceDate}
							onChange={(e) => setInvoiceDate(e.target.value)}
							required
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="exampleInputStoreNit" className="form-label">
							NIT del establecimiento
						</label>
						<input
							type="number"
							className="form-control"
							id="exampleInputStoreNit"
							value={storeNit}
							onChange={(e) => setStoreNit(e.target.value)}
							required
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="exampleInputInvoiceNumber" className="form-label">
							Numero de la factura
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputInvoiceNumber"
							value={invoiceNumber}
							onChange={(e) => setInvoiceNumber(e.target.value)}
							required
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="exampleInputInvoiceValue" className="form-label">
							Valor de la compra
						</label>
						<input
							type="number"
							className="form-control"
							id="exampleInputInvoiceValue"
							value={invoiceValue}
							onChange={(e) => setInvoiceValue(e.target.value)}
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
