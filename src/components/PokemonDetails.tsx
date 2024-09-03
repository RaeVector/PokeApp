import { fetchPokemon } from "@/lib/callPokeAPI";
import { useEffect, useState } from "react";
import Image from "next/image"
import StatsChart from "./StatChart";
import TypeColourPicker from "./ColourPicker";
import Link from "next/link"


interface PokemonInfo {
    pokemonName: string;
    pokemonID: any;
    pokemonSprite: string;
    pokemonTypes: string[];
    pokemonWeaknesses: string[];
    pokemonHeight: string;
    pokemonWeight: string;
    pokemonDescription: string;
    pokemonStats: string[];
    pokemonGenders: any;
    pokemonFlavourText: string;
    pokemonAbility: string;
    pokemonAbilityText: string;
    pokemonCategory: string;
}

export default function PokemonDetails(pokemonName:any){
    //destructuring prop
    const pokeName = Object.values(pokemonName)
    //initialising state variable
    const [data,setData] = useState<PokemonInfo | null>(null)
    
    //fetches pokemonm name and sets it in state on Effect
    useEffect(() => {
        async function fetchData() {
            const pokeInfo = await fetchPokemon(pokeName);
            setData(pokeInfo);
        }
        fetchData();
    }, [pokemonName]);

    if (!data) {
        return (
            <div className="flex flex-auto content-center align-center justify-center text-center m-32">
                <div className="align-center justify-center border-gray-300 h-20 w-20 animate-spin rounded-full border-4 border-t-blue-600"/>
            </div>
        )
    }
    
    //initialising variables for clarity
    const stats = data.pokemonStats
    const typecolour1 = data.pokemonTypes[0]
    const typecolour2 = data.pokemonTypes[1]
    return(
        <div className="justify-center content-center">
            <Link href={"/"}>Pokemon Browser</Link>
            {/* Pokemon sprite, Name and ID */}
            <div className="w-full bg-gradient-to-b from-gray-400 from-1% flex flex-auto justify-center  ">
                  <Image
                            className='image rounded-full  bg-slate-100 m-4' 
                            src={`${data.pokemonSprite}`} 
                            width={150}
                            height={150}
                            alt={data.pokemonName}
                />  
                
                
            </div>
            <div className="flex flex-auto justify-center font-semibold m-2">
                {data.pokemonName} {'#' + data.pokemonID}
            </div> 
            {/* ----------------------------- */}
            <div className="m-4">
                {/* Flavour text for pokemon */}
                <div className="flex flex-auto justify-center place-content-center align-center rounded-lg  bg-gray-200 h-12 m-4">
                        <Image

                                src={'/pokeball.png'}
                                width={40}
                                height={40} alt={"pokeball"}
                                className='justify center image rounded-full  bg-white mx-4' 
                            />
                            <div className="align-middle my-3">
                                {data.pokemonFlavourText}
                            </div>
                
                </div>
                {/* ----------------------- */}
                <div className="flex w-full grid grid-cols-3 grid rows-2 p-4 gap-8">
                    <div className="col-span-1 row-span-2 rounded-lg shadow-md shadow-slate-500">
                        {/* Grid of pokemon details */}
                        <div className="grid grid-cols-1 grid-rows-11 m-4">
                            <div className="font-semibold">
                                Height
                            </div>
                            <div className="text-sm">
                                {data.pokemonHeight}
                            </div>
                            <div/>
                            <div className="font-semibold">
                                Category
                            </div>
                            <div className="text-sm">
                                {data.pokemonCategory}
                            </div>
                            <div/>
                            <div className="font-semibold">
                                Weight
                            </div>
                            <div className="text-sm">
                                {data.pokemonWeight}
                            </div>
                            <div/>
                            <div className="font-semibold">
                                Gender
                            </div>
                            <div className="text-sm">
                                {data.pokemonGenders}
                            </div>
                        </div>
                        {/* ----------------------- */}
                    </div>

                    <div className="col-span-1 row-span-1 rounded-lg shadow-md shadow-slate-500 ">
                        {/* Types and Weaknesses */}
                        <div className="m-4">
                            <div className="font-semibold">
                                Type(s)
                            </div>
                            <div className="justify-center grid grid-cols-2 grid-rows-1 my-2">
                                <div className="col-span-1 mx-1">
                                <TypeColourPicker colour={typecolour1}/> 
                                </div>
                                <div className="col-span-1 mx-1">
                                    {
                                    typecolour2 && 
                                    <TypeColourPicker colour={typecolour2}/>
                                    }
                                </div>
                            </div>
                            <div className="font-semibold">
                                Weaknesses
                            </div>
                            <div className="text-sm">
                                {data.pokemonWeaknesses}
                            </div>
                        </div>
                        {/* --------------- */}
                    </div>
                    <div className="col-span-1 row-span-1 rounded-lg shadow-md shadow-slate-500">
                        {/* Pokemon Ability (just picked the first one) */}
                        <div className="m-4">
                            <div className="font-semibold">
                                Ability
                            </div>
                            <div className="text-sm">
                                {data.pokemonAbility}
                            </div>
                            <div className="text-sm italic">
                                {data.pokemonAbilityText}
                            </div>
                        </div>
                        {/* ------------------------------------------ */}
                    </div>
                    <div className="col-span-2 row-span1 rounded-lg shadow-md shadow-slate-500">
                        {/* Bar Chart of stats */}
                        <div className="m-4">
                            <div className="font-semibold">
                                Stats
                            </div>
                            <StatsChart intlist={stats}></StatsChart>
                        </div>
                        {/* ---------------- */}
                    </div>

                </div>
            </div>


            

        </div>
    )
}
