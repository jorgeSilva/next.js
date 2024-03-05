type PageParams = {
  params: {
    id: string,
  }
}

type Produto = {
  id: number,
  nome: string,
  preco: number,
  descricao: string,
  estoque: number,
  importado: number
}

export default async function ProdutosPage({params}: PageParams){

  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`
  )
  const data = await response.json() as Produto

  return (
    <main>
      <h1>{data.nome}</h1>
      <p>R${data.preco}</p>
      <p>{data.descricao}</p>
    </main>
  )
}