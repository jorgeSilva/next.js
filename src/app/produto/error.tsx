'use client'

export default async function Error({error}: {error: Error}) {
  return (
    <main>
      <h1>Um erro ocorreu.</h1>
      {error.message}
    </main>
  )
}