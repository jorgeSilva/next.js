import { GetCursos } from "@/api/api"
import Link from "next/link"

export default async function CursosPage(){
  const data = await GetCursos()
  return (
    <div>
      <h1>Cursos</h1>
      <ul>
      {data.map((curso) => (
        <li key={curso.id}>
          <Link href={`/cursos/${curso.slug}`}>
            <h2>{curso.nome}</h2>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}