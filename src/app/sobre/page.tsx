import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Essa é a pagina sobre"
}

export default function SobrePage(){
  return (
    <main>
      <h2>Sobre</h2>
    </main>
  )
}