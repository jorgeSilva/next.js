import Link from "next/link"

export type ICursos = {
  id: number,
  slug: string,
  nome: string,
  descricao: string,
  total_aulas: number,
  total_horas: number,
  error?: string
}

export type IAulas = {
  id: number,
  slug: string,
  nome: string,
  descricao: string,
  curso_id: number,
  tempo: number,
  ordem: number
}

export async function GetCursos(){
  const response = await fetch("https://api.origamid.online/cursos")
  return await response.json() as ICursos[]
  
}

export async function GetCurso(curso: string){
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`)
  return await response.json() as ICursos & { aulas: IAulas[]}
}

export async function GetAula(curso: string, aula: string){
  const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`)
  return await response.json() as IAulas
}