export const runtime = "experimental-edge"

async function getPokemons(): Promise<
  {
    name: string
  }[]
> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")

  const json = await response?.json()

  return json.results
}

export default async function Home() {
  const pokemons = await getPokemons()

  return (
    <div>
      <h1>Edge Runtime - Page inside (group-with-layout)</h1>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <h2>{pokemon.name}</h2>
        </div>
      ))}
    </div>
  )
}
