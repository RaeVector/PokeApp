'use client'
import RootLayout from "./layout";
import PokeGrid from "@/components/PokeGrid";
import { useState, useEffect } from "react";
import { fetchAllPokemon } from "@/lib/callPokeAPI";
import PageTurner from "@/components/PageTurner";



export default function Home() {

  //initialise state variables
  const [data,setData] = useState<any | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  function pageForwards(){
    if (pageNumber<65){
      setPageNumber(pageNumber + 1)
    }
  }
  function pageBackwards(){
      setPageNumber(pageNumber - 1)
    
  }  
  function pageFirst(){
    setPageNumber(1)
  }
  function pageLast(){
    setPageNumber(65)
  }
  

  //set list of pokemon names in state
  useEffect(() => {
      async function fetchData() {
          const pokemonNameList = await fetchAllPokemon(pageNumber);
          //sets pokemon names in state
          setData(pokemonNameList);
          //scrolls to top of page
          window.scrollTo(0,0)
          //loads in pokemon names in sets of 20

          
      }
        fetchData();
    }, [pageNumber]);
    if (!data) {
        return (
          <div className="flex flex-auto content-center align-center justify-center text-center m-32">
            <div className="align-center justify-center border-gray-300 h-20 w-20 animate-spin rounded-full border-4 border-t-blue-600"/>
          </div>
        )
           // Show loading state until data is fetched
    }



   return (
    <div>
      <RootLayout>
        <main className="flex-wrap">

          {/* Renders grid */}
          <PokeGrid pokemonList={data}/>
          {/*  */}

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
            {/*  */}

            

        </div>
        </main>
      </RootLayout>
    </div>
  );
}

