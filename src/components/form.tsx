'use client'

import { postProdutos } from "@/actions/post-produto"
import React from "react"
import { useFormState, useFormStatus } from "react-dom"

export function Button(){
  const status = useFormStatus()
  return (
    <button type="submit" disabled={status.pending}>Adicionar</button>
  )
}

export default function Form() {
  const [state, formAction] = useFormState(postProdutos, {
    errors:[]
  })

  return (
    <form action={formAction}>
      <label htmlFor="nome">Nome</label>
      <input  type="text" name="nome" id="nome" />

      <label htmlFor="preco">Preço</label>
      <input  type="number" name="preco" id="preco" />

      <label htmlFor="descricao">Descrição</label>
      <input  type="text" name="descricao" id="descricao" />

      <label htmlFor="Estoque">Estoque</label>
      <input  type="number" name="Estoque" id="Estoque" />

      <label htmlFor="importado">
        <input type="checkbox" name="importado" id="importado" />
        Importado
      </label>

      <Button />
      {
        state.errors.map((error, i) => <p key={i} style={{color: 'red'}}>{error}</p>)
      }
    </form>
  )
}