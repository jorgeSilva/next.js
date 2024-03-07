'use client'

import { revalidatePathAction, revalidateTagAction } from "@/actions/revalidate-path"
import React from "react"

export default async function Atualizar() {
  function handleClick(){
    // revalidatePathAction('/acoes')
    revalidateTagAction('acoes')
  }

  // React.useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     revalidatePathAction('/acoes')
  //   }, 5000)
  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, [])

  return(
    <main>
      <button onClick={handleClick}>Atualizar</button>
    </main>
  )
}