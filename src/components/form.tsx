'use client'

import { postProdutos } from "@/actions/post-produto"
import React from "react"

export default function Form() {
  const [nome, setNome] = React.useState<string>('')
  const [preco, setPreco] = React.useState<number>(0)
  const [descricao, setDescricao] = React.useState<string>('')
  const [estoque, setEstoque] = React.useState<number>(0)
  const [importado, setImportado] = React.useState<1 | 0>(0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    await postProdutos(nome, preco, descricao, estoque, importado)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input onChange={(e) => setNome(e.target.value)} type="text" name="nome" id="nome" />

      <label htmlFor="preco">Preço</label>
      <input onChange={(e) => setPreco(+e.target.value)} type="number" name="preco" id="preco" />

      <label htmlFor="descricao">Descrição</label>
      <input onChange={(e) => setDescricao(e.target.value)} type="text" name="descricao" id="descricao" />

      <label htmlFor="Estoque">Estoque</label>
      <input onChange={(e) => setEstoque(+e.target.value)} type="number" name="Estoque" id="Estoque" />

      <label htmlFor="importado">
        <input onChange={(e) => {
          setImportado(e.target.checked === true ? 1 : 0)
        }} type="checkbox" name="importado" id="importado" />
        Importado
      </label>

      <button type="submit">Adicionar</button>
    </form>
  )
}