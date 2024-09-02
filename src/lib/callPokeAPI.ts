//pokemon API URL
const poke_API = 'https://pokeapi.co/api/v2/';
export async function fetchAllPokemon(pagenumber:any){

  const offset = (pagenumber - 1)*20;
  const response = await fetch(poke_API + `pokemon?offset=${offset}?limit=20`); //20 pokemon
  const {results} = await response.json();
  const pokeNames = results.map(((item: { [s: string]: unknown; } | ArrayLike<unknown>) =>  Object.values(item)[0]));
    return {
      pokeNames
    };
  }

 export async function fetchAll1300Pokemon(){
  const response = await fetch(poke_API + `pokemon?limit=1302`); //all! pokemon
  const {results} = await response.json();
  const pokeNames = results.map(((item: { [s: string]: unknown; } | ArrayLike<unknown>) =>  Object.values(item)[0]));
  return{
    pokeNames
  }
 }

 //returns specific information about individual pokemon
export async function fetchPokemon(pokemon: any){
    //bit slow to be loading this on main page
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); //specific pokemon
    const results = await response.json();

    const second_response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);;
    const second_results = await second_response.json();

    //sorting genders
    //four cases: only male, only female, male and female, no gender
    const gendered_response_1 = await fetch(`https://pokeapi.co/api/v2/gender/1`);
    const gendered_result_1 = await gendered_response_1.json();
    const gendered_response_2 = await fetch(`https://pokeapi.co/api/v2/gender/2`);
    const gendered_result_2 = await gendered_response_2.json();
    const gendered_response_3 = await fetch(`https://pokeapi.co/api/v2/gender/3`);
    const gendered_result_3 = await gendered_response_3.json();

    const females = []
    for (var i=0; i< gendered_result_1.pokemon_species_details.length; i++){
      females.push(gendered_result_1.pokemon_species_details[i].pokemon_species.name)
    }
    const males = []
    for (var i=0; i< gendered_result_2.pokemon_species_details.length; i++){
      males.push(gendered_result_2.pokemon_species_details[i].pokemon_species.name)
    }
    const none_gender = []
    for (var i=0; i< gendered_result_3.pokemon_species_details.length; i++){
      none_gender.push(gendered_result_3.pokemon_species_details[i].pokemon_species.name)
    }
    const pokeGenders = (() => { //probably better way to do this
            if (females.includes(results.name) && males.includes(results.name)){
            return `Male / Female`
          } else
          if (females.includes(results.name)){
            console.log('yes!')
            return 'Female'
          } else
          if (males.includes(results.name)){
            return 'Male'
          } else
          if (none_gender.includes(results.name)){
            return 'None'
          }
          else return 'What!'
    })();

    const pokeAbility_lowercase = results.abilities[0].ability.name
    const pokeAbility =pokeAbility_lowercase.charAt(0).toUpperCase() + pokeAbility_lowercase.slice(1)
    const ability_response = await fetch(`https://pokeapi.co/api/v2/ability/${pokeAbility_lowercase}`)
    const ability_result = await ability_response.json()

    const abilitiesList = ability_result.effect_entries
    const pokeAbilityText = (() => {
      for (var i =0; i < abilitiesList.length; i++){
        if (abilitiesList[i].language.name == "en"){ //checks for english version
          return abilitiesList[i].effect
        }
    }
    })()

    //initialising variables
    const pokeName = results.name.charAt(0).toUpperCase() + results.name.slice(1) //adds capital to name
    const sprite = `${results.sprites.front_default}`;
    const pokeID = ('000' + results.id).slice(-4);
    const pokeWeight = `${results.weight/10} kg`; //divide by ten to convert from hectagrams
    const pokeHeight = `${results.height/10} m`; //divide by ten to convert from decimeters

    const flavour_text_entries = second_results.flavor_text_entries
    const flavorText = (() => {
      for (var i =0; i < flavour_text_entries.length; i++){
        if (flavour_text_entries[i].language.name == "en"){ //checks for english version
          return JSON.stringify(flavour_text_entries[i].flavor_text)
        } else continue
        
    } 
    })()

    // const flavorText = JSON.stringify(second_results.flavor_text_entries[0].flavor_text); 
    const flavorText1 = flavorText.replace(/\\n/g," "); //this is a bit messy but kept getting "no glyph"
    //its getting mad here about type but it seems fine
    const flavorText2 = flavorText1.replace(/\"/g, "")
    const flavourText = flavorText2.replace(/\\f/g," ");

    //Collecting pokemon category
    const genera = second_results.genera
    const pokeCategory = (() => {
      for (var i =0; i < genera.length; i++){
        if (genera[i].language.name == "en"){ //checks for english version
        return genera[i].genus
      }
      
      }
    })()

    //fills array with pokemon stats
    const stats = results.stats;
    const statlist = [];
    for (var i = 0; i < stats.length; i++){
      const stat = stats[i].base_stat;
      statlist.push(stat);
    }
    
    //fills array with the pokemon's type
    const typelist = results.types;
    const poketypes = []  //passed into pokeInfo later
    for (var i = 0; i < typelist.length; i++){
      const typepoke = typelist[i].type.name;
      poketypes.push(typepoke);
    }

    //adding set of weaknesses from first type
    const weakness_response_1 = await fetch(`https://pokeapi.co/api/v2/type/${poketypes[0]}`); //specific pokemon
    const weakness_results_1 = await weakness_response_1.json();
    const weaknesslist1 = weakness_results_1.damage_relations.double_damage_from

    const pokeWeakness = []
    for (var i = 0; i< weaknesslist1.length; i++){
      const weakness_lowercase = weaknesslist1[i].name
      const weakness = weakness_lowercase.charAt(0).toUpperCase() + weakness_lowercase.slice(1)
      pokeWeakness.push(weakness + ' ')
    }


    //adding set of weaknesses from second type if it exists
    if (poketypes[1]){
      const weakness_response_2 = await fetch(`https://pokeapi.co/api/v2/type/${poketypes[1]}`); //specific pokemon
      const weakness_results_2 = await weakness_response_2.json();
      const weaknesslist2 = weakness_results_2.damage_relations.double_damage_from

      for (var i = 0; i< weaknesslist2.length; i++){
        const weakness_lowercase = weaknesslist2[i].name
        const weakness = weakness_lowercase.charAt(0).toUpperCase() + weakness_lowercase.slice(1)
        if (!(weakness in pokeWeakness)){
          pokeWeakness.push(weakness + ' ')
        }
      }
    }
    
    return {
      pokemonName: pokeName,
      pokemonID: pokeID,
      pokemonSprite: sprite,
      pokemonTypes: poketypes,
      pokemonWeaknesses: pokeWeakness,
      pokemonHeight: pokeHeight,
      pokemonWeight: pokeWeight,
      pokemonDescription: flavourText,
      pokemonStats: statlist,
      pokemonGenders: pokeGenders,
      pokemonFlavourText: flavourText,
      pokemonAbility: pokeAbility,
      pokemonAbilityText: pokeAbilityText,
      pokemonCategory: pokeCategory
    };
}