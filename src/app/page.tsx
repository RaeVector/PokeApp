'use client'
import RootLayout from "./layout";
import PokeGrid from "@/components/PokeGrid";
import { useState, useEffect, ChangeEvent } from "react";
import { fetchAll1300Pokemon, fetchAllPokemon } from "@/lib/callPokeAPI";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PokeCard from "@/components/PokeCard";





export default function Home() {
  //initialise state variables
  const [data,setData] = useState<any | null>(null) //holds pokemon list of 20
  const [pageNumber, setPageNumber] = useState(1) //holds page number 
  const [isMounted, setIsMounted] = useState(false); //checks if component is mounted
  const [pokemonList, setPokemonList] = useState<any | null>('wowza!') //list of all pokmemon
  const [inputValue, setValue] = useState('Search') //holds search values
  const [foundPokemon, setFoundPokemon] = useState(false) //true if search is a match, else false
  const [pokeID, setpokeID] = useState<any | null>() //holds pokemon ID values
  
  
  // page control functions
  function pageForwards(){
    if (pageNumber<65){
      setPageNumber(pageNumber + 1)
    }
    setpokeID(pokeID+1)
  }
  function pageBackwards(){
      setPageNumber(pageNumber - 1)
      setpokeID(pokeID-1)
  }  
  function pageFirst(){
    setPageNumber(1)
    setpokeID(1)
  }
  function pageLast(){
    setPageNumber(65)
    setpokeID(1302)
  }
  //--------------------

  //set list of pokemon names in state
  useEffect(() => {
      async function fetchData() {
          setIsMounted(true);

          const pokemonList = await fetchAll1300Pokemon()
          setPokemonList(pokemonList) //sets all pokemon names in state

          const pokemonNameList = await fetchAllPokemon(pageNumber); //fetches pokemon names
          setData(pokemonNameList); //sets 20 pokemon names in state

          window.scrollTo(0,0)  //scrolls to top of page
      }
        fetchData();
    }, [pageNumber]);

    if (!isMounted) {
      return null;
    }
    //------------------
  
    //Sets loading symbol if no data
    if (!data || !pokemonList) {
        return (
          <div className="flex flex-auto content-center align-center justify-center text-center m-32">
            <div className="align-center justify-center border-gray-300 h-20 w-20 animate-spin rounded-full border-4 border-t-blue-600"/>
          </div>
        )
           // Show loading state until data is fetched
    }
    //-----------------


  //handles search value
  const handleChange = ((event: ChangeEvent<HTMLInputElement>) =>{
      const inputValueAnyCase = event.target.value;
      const inputValue = inputValueAnyCase.toLocaleLowerCase() //handles case of input
      setValue(inputValue) //stores search in state
      setFoundPokemon(false) //defaults to false - mainly to return grid if input is reduced (using backspace etc)
      for (var i=0; i < pokemonList.pokeNames.length; i++){ //searching to see if input value is a pokemon
          if (pokemonList.pokeNames[i] == inputValue){
            setFoundPokemon(true) //input matches a pokemon name
            const pokeIDFromArray = pokemonList.pokeNames.indexOf(inputValue) + 1 //creates id for pokemon from index in list
            setpokeID(pokeIDFromArray) //sets id in state
            stop //takes first version it finds
        } 
      }
    }
  )
  //-----------------

   return (
      <RootLayout>
        <div>
          <div>
            <Header/>
          </div>
        <div className="flex-wrap">
          {/* Renders grid */}

          {/* Search bar */}
          <div className="flex flex-auto justify-center w-96 h-14 m-2 mx-auto">
            <input type="search" onChange={handleChange}  id="default-search" className="block p-4 ps-10 mr-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Pokemon..." required />
            
          </div>
          {/*----------  */}
          {/* Conditional: Either grid of pokemon or singular search */}
          {
            foundPokemon !== true ? 
            <div>
              <PokeGrid  pokemonList={pokemonList}/>
            </div>
            :
            <div className="w-48">
               <PokeCard pokeName={pokeID}/>
            </div>
          }
          {/* ---------------------------------------------------- */}

          {/* <PageTurner/> */}
          {/* Would have preffered this to be in seperate component */}
            <div>
              {/* Page Change Buttons */}
              <div className="flex flex-auto grid-cols-2 text-center justify-center align-center pb-5 gap-5">
                <button id='firstPage' onClick={pageFirst} >
                  First
                </button>
                {
                  // making sure user cant go to page -1 (which doesnt exist)
                  pageNumber!==1 ? 
                  <button id="previousPage" onClick={pageBackwards}  className="col-span-1 outline outline-black bg-yellow-300 rounded-lg px-2 text-center justify-center align-center">
                      Previous
                  </button>
                  :
                  null
                }
                {
                  // making sure user cant go past page 65
                  pageNumber!==65?
                  <button id="nextPage" onClick={pageForwards} className="col-span-1 outline outline-black bg-blue-300 rounded-lg px-6 text-center semibold text-m justify-center align-center">
                      Next
                  </button>
                  :
                  null
                }
                  
                  <button onClick={pageLast} >
                  Last
                </button>
              </div>
              {/*  */}
              {/* Page Number */}
              <div className="flex flex-auto content-center justify-center align-center">
                  {`Page ${pageNumber}`}
              </div>
              {/* ----------- */}
          </div>
        </div>
        <Footer/>
        </div>
      </RootLayout>
    
  );
}

