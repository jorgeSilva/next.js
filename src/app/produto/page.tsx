import ProdutosLista from "@/components/produtos-lista"
import { Suspense } from "react"
import AdicionarPage from "./adicionar/page"

export type IProduto = {
  id?: string,
  nome: string, 
  preco: number, 
  descricao: string, 
  estoque: number, 
  importado: 1 | 0
}

export default async function ProdutoPage() {
  return (
    <main>
      <h1>Produto</h1>
      <p>Essa aqui é a lista de produtos</p>
      <Suspense fallback={'carregando...'}>
        <ProdutosLista/>
      </Suspense>
    </main>
  )
}