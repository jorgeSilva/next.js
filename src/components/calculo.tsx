'use client'

import React from "react"

export default function CalculoIMC(){

  const [peso, setPeso] = React.useState(0)
  const [altura, setAltura] = React.useState(0)
  const [imc, setImc] = React.useState(0)

  return (
    <div>
      <label htmlFor="altura">Altura em metros</label>
      <input onChange={(e) => setAltura(Number(e.target.value))} id="altura" name="altura" type="number" />

      <label htmlFor="peso">Peso em quilos</label>
      <input onChange={(e) => setPeso(Number(e.target.value))} id="peso" name="peso" type="number" />

      <button onClick={() => setImc((peso / (altura * altura)))}>Calcular</button>
      <p>Seu IMC é de: {imc.toFixed(2)}</p>
    </div>
  )
}