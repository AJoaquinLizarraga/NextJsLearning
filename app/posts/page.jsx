import Link from "next/link";

async function characters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results.slice(0, 9);
}
async function PostPage() {
  const personajes = await characters();
  console.log(personajes);
  return (
    <div>
      <h1>inicio</h1>
      <div style={{ background: "grey" }}>
        <h1>Personajes</h1>
        {personajes.map((char) => (
          <div key={char.id}>
            <h2>{char.id}</h2>
            <h2>{char.name}</h2>
            <h3>{char.status}</h3>
            <h3>{char.species}</h3>
            <img src={char.image} alt="" />
          </div>
        ))
        }
      </div>
      <h1>final</h1>
    </div>
  );
}
export default PostPage;
