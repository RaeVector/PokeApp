//pokemon API URL
const poke_API = 'https://pokeapi.co/api/v2/'
console.log(poke_API + `pokemon/` + 'bulbasaur')
//asynchronous function for pulling api data for all pokemon
// export async function fetchAllPokemon(){
//     const response = await fetch(poke_API + `pokemon?offset=0?limit=20`) //all pokemon
//     const {results} = await response.json();
//     const pokeNames = results.map(((item: { [s: string]: unknown; } | ArrayLike<unknown>) =>  Object.values(item)[0]));
//     return {
//       pokeNames
//    };
//  }
export async function fetchAllPokemon(pagenumber:any){

  //handle negative pagenumber
  if (pagenumber < 1){
    const pagenumber = 1
  }
  //set offset to determine which pokemon appear
  const offset = (pagenumber - 1)*20

  //handle negative offset
  if (offset < 0) {
    const offset = 0
  }

  const response = await fetch(poke_API + `pokemon?offset=${offset}?limit=20`) //all pokemon
  const {results} = await response.json();
  const pokeNames = results.map(((item: { [s: string]: unknown; } | ArrayLike<unknown>) =>  Object.values(item)[0]));
  return {
    pokeNames
 };
}
 fetchAllPokemon

 //returns specific information about individual pokemon
export async function fetchPokemon(pokemon: any){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) //specific pokemon
    const results = await response.json();

    //initialising variables
    const sprite = `${results.sprites.front_default}`
    const pokeID = ('00' + results.id).slice(-3)
    const pokeWeight = `${results.weight} kg`
    const pokeHeight = `${results.height/10} m` //divide by ten to convert from decimeters
    
    //fills array with the pokemon's type
    const typelist = results.types
    const poketypes = []  //passed into pokeInfo later
    for (var i = 0; i < typelist.length; i++){
      const typepoke = typelist[i].type.name
      poketypes.push(typepoke)
    }
    
    return {
      pokemonName: results.name,
      pokemonID: pokeID,
      pokemonSprite: sprite,
      pokemonTypes: poketypes,
      pokemonHeight: pokeHeight,
      pokemonWeight: pokeWeight
    };
}