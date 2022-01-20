import React, { useState } from 'react';


const SendEmail = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <h1>Envia uma mensagem</h1>
      <form action="/">
        <input 
        type="text" 
        name='nome'
        value={value}
        placeholder='Faça parte'
        onChange={(value) => setValue(value.target.value)}
        />
        <button>Cadastra-se</button>
      </form>
    </div>
  )
}

export default SendEmail;