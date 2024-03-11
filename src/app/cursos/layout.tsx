import { GetCursos } from "@/api/api"
import Link from "next/link"
import React from "react"

export default async function CursosLayout({children}: {children: React.ReactNode}){
  const data = await GetCursos()
  return (
    <div className="flex">
      <nav style={{marginRight: '4rem'}}>
        <h2>Cursos</h2>
        <ul>
        {data.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>
              <h2>{curso.nome}</h2>
            </Link>
          </li>
          ))}
        </ul>
      </nav>
        <div>
          {children}
        </div>
    </div>
  )
}