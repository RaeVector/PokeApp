'use client'

import PokemonDetails from '@/components/PokemonDetails';
import { useEffect, useState } from 'react';
import PokemonDetailLayout from './layout';
import Footer from '@/components/Footer';


export default function Home(this: any){


    //this is basically to stop html hydration issue
    const [isMounted, setIsMounted] = useState(false);

    const [pokemonName, setPokemonName] = useState<string | null>('bubasaur');
    // const [searchParams, setSearchParams] = useSearchParams('bulbasaur');
    // const pokemonName = this.props.location.query.pokemonname
    // const pokemonName = pokemonname

    useEffect(() => {
      setIsMounted(true);
      const urlSearchString = window.location.search;
      const params = new URLSearchParams(urlSearchString);
      if (!(params==null)){
        setPokemonName(params.get('pokemonname'))
      }
      
    }, []);
  
    if (!isMounted) {
      return null;
    }

    return (
                <PokemonDetailLayout>
                  <div>
                    <PokemonDetails pokemonName={pokemonName}/>
                  </div>
                  <div>
                    <Footer/>
                  </div>
                    
                </PokemonDetailLayout>
    )
}