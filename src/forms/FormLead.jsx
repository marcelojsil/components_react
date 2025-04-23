import React, { useState } from "react";
import "../style.css";
import Input from "../components/Input";
import ButtonPrimary from "../components/ButtonPrimary";

const FormLead = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Dados enviados com sucesso!");
        setFormData({ nome: "", email: "", whatsapp: "" });
      } else {
        alert("Erro ao enviar os dados.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="form-container">
      <Input
        width="90%"
        placeholder="Nome"
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
      />
      <Input
        width="90%"
        placeholder="E-mail"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        width="90%"
        placeholder="WhatsApp"
        type="tel"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
      />
      <ButtonPrimary text="Enviar" action={handleSubmit} />
    </div>
  );
};

export default FormLead;
