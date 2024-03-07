type IAcao = {
  nome: string,
  preco: number,
  atualizada: string
}

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua', {
    next: {
      revalidate: 5
    }
  })
  const data = await response.json() as IAcao

  return (
    <main>
      <h1>Acoes</h1>
      <h2>{data.nome}</h2>
      <p>Preço: {data.preco}</p>
      <p>Atualizada: {data.atualizada}</p>
    </main>
  )
}