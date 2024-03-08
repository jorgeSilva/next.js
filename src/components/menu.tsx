'use client'

import Link from 'next/link';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

function Busca(){
  const search = useSearchParams()
  const busca = search.get('busca')
  return <div>Busca: {busca}</div>
}

export default function Menu() {
  const params = useParams()
  const pathName = usePathname()
  const router = useRouter()

  React.useEffect(() => {
    // setInterval(() => {
    //   router.refresh()
    // }, 5000);
  }, [router])

  return (
    <>
      <Suspense>
        <Busca/> 
      </Suspense>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li> 
        <li>
          <Link href="/acoes/?busca=xpt">Ações: {params.acao}</Link>
        </li>
      </ul>
    </>
  );
}
