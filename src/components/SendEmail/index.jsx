import React, { useState } from "react";

import { SendContainer } from "./style.js";

const SendEmail = () => {
  const [value, setValue] = useState("");

  const dados = [];

  function handleSubmit(event) {
    event.preventDefault();
    dados.push(value);
  }
  return (
    <SendContainer>
      <div className="container">
        <div className="title">
          <h1>Seja um usuário ativo do digital.ao</h1>
          <p>Cria a sua conta agora</p>
        </div>
        <form action="/">
          <input
            type="text"
            name="nome"
            value={value}
            placeholder="Faça parte"
            onChange={(value) => setValue(value.target.value)}
          />
          <button onClick={handleSubmit}>Cadastra-se</button>
        </form>
      </div>
    </SendContainer>
  );
};

export default SendEmail;
