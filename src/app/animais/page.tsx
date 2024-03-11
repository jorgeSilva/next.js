type IAnimal = {
  id: number,
  nome: string,
  descricao: string,
  imagem: string,
}

import Image from "next/image"
import style from './animais.module.css'

export default async function AnimaisPage() {
  const response = await fetch('https://api.origamid.online/animais',{
    cache: 'no-store'
  })
  const animais = await response.json() as IAnimal[]

  return (
    <main>
      <h1>Animais</h1>
      <ul className={style.animais}>
        {animais.map((animal, i) => <li key={animal.id}>
          <h2>{animal.nome}</h2>
          <Image 
            src={animal.imagem} 
            alt={animal.descricao}
            width={2400} 
            height={1600} 
            quality={75}
            sizes="(max-width: 600px)100vw, 50vw"
            priority={i < 2}
          />
        </li>)}
      </ul>
    </main>
  )
}