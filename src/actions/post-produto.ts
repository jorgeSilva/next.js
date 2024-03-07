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

export async function postProdutos(
  nome: string, 
  preco: number, 
  descricao: string, 
  estoque: number, 
  importado: 1 | 0
){
  try{

    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        preco,
        descricao,
        estoque,
        importado
      })
    })
    
    await response.json() as IProduto

    revalidatePath('/produto')
    redirect('/produto')
    
  }catch(err){
    return false
  }
}