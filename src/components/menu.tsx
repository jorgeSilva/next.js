import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      <li>
        <Link href={`/sobre#empresa`} scroll={false} prefetch={true}>sobre</Link>
      </li>
      <li>
        <Link href={`/contato`}>contato</Link>
      </li>
    </ul>
  )
}