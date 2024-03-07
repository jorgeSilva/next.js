type IProduto = {
  id?: string,
  nome: string, 
  preco: number, 
  descricao: string, 
  estoque: number, 
  importado: 1 | 0
}

export default async function ProdutoPage() {
  const response = await fetch('https://api.origamid.online/produtos', {
    next: {
      revalidate: 5
    }
  })
  const produtos = await response.json() as IProduto[]

  return (
    <main>
      <h1>Produto</h1>
      <ul>
        {
          produtos.map((produto) => (
            <li key={produto.id}>{produto.nome}: R${produto.preco}</li>
          ))
        }
      </ul>
    </main>
  )
}