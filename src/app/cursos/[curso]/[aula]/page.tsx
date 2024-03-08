import { GetAula, GetCurso, GetCursos, IAulas } from "@/api/api"

type PageParams = {
  params: {
    aula: string,
    curso: string
  }
}

export async function generateStaticParams(){
  const cursos =  await GetCursos()
  const aulas = await Promise.all(cursos.map((curso) => GetCurso(curso.slug)))
  return aulas.reduce((acc: IAulas[], cursos) => 
    acc.concat(cursos.aulas), 
  []).map((aula) => (
    {
      curso: cursos.find((curso) => curso.id === aula.curso_id)?.slug,
      aula: aula.slug
    }
  ))
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