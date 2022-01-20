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
        onChange={(value) => setValue(value.target.value)}
        />
      </form>
    </div>
  )
}

export default SendEmail;