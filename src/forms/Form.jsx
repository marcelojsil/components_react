import React, { useState } from "react";
import Input from "../components/Input";

const Forms = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <Input
        width="300px"
        placeholder="Digite seu e-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default Forms;