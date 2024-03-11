import Script from "next/script";

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Procure por cursos na aba Cursos.</p>
      <Script 
        id="script-teste" 
        strategy="beforeInteractive"
        src="https://api.origamid.online/scripts/idade-legal.min.js"

      />
    </div>
  );
}
