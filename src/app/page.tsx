'use client'

import { setCookie } from "@/actions/set-cookie";
import React from "react";

export default function Home() {
  const [valor, setValor] = React.useState(' ')
  async function handleClick(){
    const response = await setCookie('segredo', '123456')
    setValor(response.value)
  }

  return (
    <div>
      <h1>Home: {valor}</h1>
      <button onClick={handleClick}>Definir Cookie</button>
    </div>
  );
}
