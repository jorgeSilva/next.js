import { GetAula } from "@/api/api"

type PageParams = {
  params: {
    aula: string,
    curso: string
  }
}

export default async function AulaPage({params}: PageParams){

  const data = await GetAula(params.curso, params.aula)

  return (
    <main>
      <h1>Aula</h1>
      <p>{data.nome}</p>
      <p>{data.descricao}</p>
      <p>tempo: {data.tempo} minutos</p>
      <p>Ordem: {data.ordem}</p>
    </main>
  )
}