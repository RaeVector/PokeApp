'use client'
import {  fetchPokemon } from "@/lib/callPokeAPI"
import { useEffect, useState } from "react"
import Link from "next/link"
import TypeColourPicker from "./ColourPicker"
import Image from "next/image"
interface PokemonInfo {
    pokemonName: string;
    pokemonID: string;
    pokemonSprite: string;
    pokemonTypes: string[];
    pokemonHeight: string;
    pokemonWeight: string;
}

//creates each specific pokemon detail card
export default function PokeCard({pokeName}: any) {

    //initialise state variables
    const [data,setData] = useState<PokemonInfo | null>(null)

    //pull input
    const pokemonName = pokeName;

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    //set pokemon info in state
    useEffect(() => {
        async function fetchData() {
            await timeout(2000)
            const pokeInfo = await fetchPokemon(pokemonName);
            setData(pokeInfo);
        }
        fetchData();
    }, [pokemonName]);

    if (!data) {
        return <div className="text-center m-32 bg-slate-100 flex flex-auto grid grid-rows-10 grid-cols-10 rounded-lg shadow-md  gap-y-1  ">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-4 border-t-blue-600"/>
        </div>; // Show loading state until data is fetched
    }
    
    //setting colour variables
    const typecolour1 = data.pokemonTypes[0]
    const typecolour2 = data.pokemonTypes[1]

    // functionality not included yet
    function goToPokemon(pokemonName:any){
        const name = pokeName
        console.log(name)
    }
    return (
        <div>
            <Link href={"/"}>
                <div onClick={goToPokemon} className="flex flex-auto grid grid-rows-10 grid-cols-10 rounded-lg shadow-md shadow-slate-500 hover:shadow-black hover:shadow-xl gap-y-1  ">

                    {/* Pokemon Sprite */}
                    <div className="col-span-10 rounded-t-lg row-span-6 bg-slate-100 content-center place-self-center">
                        <Image
                            className='image' 
                            src={`${data.pokemonSprite}`} 
                            width={'500'}
                            height={'500'}
                            alt={pokeName}
                        >
                        </Image>
                    </div>
                    {/*  */}

                    {/* Pokemon Name */}
                    <div className="col-span-10 row-span-1 text-xl font-semibold px-4">
                        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
                    </div>
                    {/*  */}

                    {/* Pokemon ID */}
                    <div className="col-span-10 row-span-1 px-4">
                        {'#' + data.pokemonID}
                    </div>
                    {/*  */}

                    {/* Empty div for spacing row*/}
                    <div className="col-span-10 row-span-1"/>
                    {/*  */}

                    {/* Empty div for spacing on bottom row*/}
                    <div className="col-span-1 row-span-1"/>
                    {/*  */}

                    
                    {/* Conditional Pokemon Type */}
                    <div  className=" justify-center col-span-2 row-span-1">
                        <TypeColourPicker colour={typecolour1}/>
                    </div>
                    {/*  */}

                    {/* Empty div for spacing */}
                    <div className="col-span-1 row-span-1"/>
                    {/*  */}

                    {/* Conditional (Conditioal Pokemon Type) */}
                    <div className="justify-center col-span-2 row-span-1">
                    {
                        typecolour2 && 
                        <TypeColourPicker colour={typecolour2}/>
                    }
                    </div>
                </div>
            </Link>
        </div>
            
    )
}




function timeout(arg0: number) {
    throw new Error("Function not implemented.")
}

