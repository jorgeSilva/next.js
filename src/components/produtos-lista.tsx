import { IProduto } from "@/app/produto/page"

export default async function ProdutosLista() {
  let produtos: IProduto[] = []

  try{
    const response = await fetch('https://api.origamid.online/produtos', {
      cache: 'no-cache'
      // next: {
      //   revalidate: 5
      // }
    })
    if(!response.ok) throw new Error('Erro ao carregar os produtos.')
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