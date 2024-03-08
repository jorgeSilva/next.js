'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

type IProduto = {
  id?: string,
  nome: string, 
  preco: number, 
  descricao: string, 
  estoque: number, 
  importado: 1 | 0
}

function validarNome(nome: unknown){
  return typeof nome === "string" && nome.length > 1
}

function validarPreco(preco: unknown){
  return typeof preco === "number" && preco > 1
}

export async function postProdutos(state: {errors: string[]}, formdata: FormData){
  const produto: IProduto = {
    nome: formdata.get('nome') as string,
    descricao: formdata.get('descricao') as string,
    preco: Number(formdata.get('preco')),
    estoque: Number(formdata.get('estoque')),
    importado: formdata.get('importado') ? 1 : 0
  }

  let errors = []
  if(!validarNome(produto.nome)) errors.push('Nome inválido')
  if(!validarPreco(produto.preco)) errors.push('Preço inválido') 
  if(errors.length > 0) return {errors}
  try {

    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(produto)
    })
    if(!response.ok)throw new Error('Erro ao adicinar o produto.')
  }catch(error: unknown){
    if(error instanceof Error){
      return {
        errors: [error.message]
      }
    } 
  }
  revalidatePath('/produto')
  redirect('/produto')
  // return {errors: []}
}