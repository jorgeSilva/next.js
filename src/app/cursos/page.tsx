import style from './cursos.module.css'

export default async function CursosPage(){
  return (
    <div className={style.cursos}>
      <h1>Front End e UI Design</h1>
      <p>A Origamid oferece cursos de Front End e UI Design</p>
    </div>
  )
}