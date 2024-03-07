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

export async function postProdutos(formdata: FormData){
  const produto: IProduto = {
    nome: formdata.get('nome') as string,
    descricao: formdata.get('descricao') as string,
    preco: Number(formdata.get('preco')),
    estoque: Number(formdata.get('estoque')),
    importado: formdata.get('importado') ? 1 : 0
  }
  
  const response = await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(produto)
  })
  
  await response.json() as IProduto

  revalidatePath('/produto')
  redirect('/produto')
}