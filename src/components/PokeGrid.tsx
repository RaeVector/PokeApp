import PokeCard from "./PokeCard"

interface PokemonGridProps {
    pokemonList: any[]
}

export default function PokeGrid({ pokemonList }: PokemonGridProps) {
    const pokemonsList = pokemonList
    const pokemons = Object.values(pokemonsList)[0]
    // console.log("first pokemon: " + pokemons[0])
    // console.log(pokemons)
    return (
        <div className=" grid grid-cols-4 p-4 gap-4 rounded border-slate-700 pb-10">
            {/* Grid pieces (theres definitely a nicer way to do this.) */}
            <PokeCard pokeName={pokemons[0]}/>
            <PokeCard pokeName={pokemons[1]}/>
            <PokeCard pokeName={pokemons[2]}/>
            <PokeCard pokeName={pokemons[3]}/>
            <PokeCard pokeName={pokemons[4]}/>
            <PokeCard pokeName={pokemons[5]}/>
            <PokeCard pokeName={pokemons[6]}/>
            <PokeCard pokeName={pokemons[7]}/>
            <PokeCard pokeName={pokemons[8]}/>
            <PokeCard pokeName={pokemons[9]}/>
            <PokeCard pokeName={pokemons[10]}/>
            <PokeCard pokeName={pokemons[11]}/>
            <PokeCard pokeName={pokemons[12]}/>
            <PokeCard pokeName={pokemons[13]}/>
            <PokeCard pokeName={pokemons[14]}/>
            <PokeCard pokeName={pokemons[15]}/>
            <PokeCard pokeName={pokemons[16]}/>
            <PokeCard pokeName={pokemons[17]}/>
            <PokeCard pokeName={pokemons[18]}/>
            <PokeCard pokeName={pokemons[19]}/>
        </div>
    )
}