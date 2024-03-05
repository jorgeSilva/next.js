import { GetCurso } from "@/api/api"
import Link from "next/link"

type PageParams = {
  params: {
    curso: string
  }
}

export default async function CursosPage({params}: PageParams){

  const data = await GetCurso(params.curso)

  return (
    <main>
      <h1>Curso</h1>
      <p>{data.nome}</p>
      <p>{data.descricao}</p>
      <p>Total de aulas: {data.total_aulas}</p>
      <p>Total de horas: {data.total_horas} hrs</p>
      <ul>Aulas: {data.aulas.map(aula => (
        <li key={aula.id}>
          <Link href={`/cursos/${data.slug}/${aula.slug}`}>
            <p>{aula.nome}</p>
          </Link>
        </li>
      ))}</ul>
    </main>
  )
}