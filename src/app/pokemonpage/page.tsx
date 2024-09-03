'use client'

import PokemonDetails from '@/components/PokemonDetails';
import { useEffect, useState } from 'react';
import PokemonDetailLayout from './layout';
import Footer from '@/components/Footer';


export default function Home(this: any){


    //this is basically to stop html hydration issue
    const [isMounted, setIsMounted] = useState(false);

    const [pokemonName, setPokemonName] = useState<string | null>('bulbasaur');

    useEffect(() => {
      setIsMounted(true);
      const params = window.location.search      
      const param = new URLSearchParams(params);
      if (!(param==null)){
        setPokemonName(param.get('pokemonname'))
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
