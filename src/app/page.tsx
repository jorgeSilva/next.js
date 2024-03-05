import ServerFetch from "@/components/server-fetch";

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ServerFetch/>
    </div>
  );
}
