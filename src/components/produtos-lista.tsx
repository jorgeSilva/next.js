import { IProduto } from "@/app/produto/page"

export default async function ProdutosLista() {
  let produtos: IProduto[] = []

  try{
    const response = await fetch('https://api.origami.online/produtos', {
      next: {
        revalidate: 5
      }
    })

    produtos = (await response.json()) as IProduto[]
   }catch(err){
    return <p>Ocorreu um erro nessa lista de produtos.</p>
  }

  return (
    <ul>
      {
        produtos.map((produto) => (
          <li key={produto.id}>{produto.nome}: R${produto.preco}</li>
        ))
      }
    </ul>
  )
}