//function to pick a background colour for pokemon types
//tried to do this within tailwind itself but theres no functionality for
//using template literals
export default function TypeColourPicker(colour:any){
    //destructure colour variable
    const typeColour = colour['colour']
    return (
        <div>
            <div>
                {/*Normal Type*/}
                {typeColour == 'normal' &&
                    <div  className={`bold bg-normal rounded-lg outline outline-black outline-2 text-sm text-white text-center`}>
                        {typeColour}
                    </div>
                }
            </div>
            {/*Fire Type*/}
            {typeColour == 'fire' && 
                <div  className={`bg-fire   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Water Type*/}
            {typeColour == 'water' &&
                <div  className={`bg-water   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Electric Type*/}
            {typeColour == 'electric' && 
                <div  className={`bg-electric   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Grass Type*/}
            {typeColour == 'grass' &&
                <div  className={`bg-grass   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Ice Type*/}
            {typeColour == 'ice' && 
                <div  className={`bg-ice   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Fightin Type*/}
            {typeColour == 'Fightin' && 
                <div  className={`bg-fightin   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Poison Type*/}
            {typeColour == 'poison' && 
                <div  className={`bg-poison   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Ground Type*/}
            {typeColour == 'ground' && 
                <div  className={`bg-ground   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Fyling Type*/}
            {typeColour == 'flying' && 
                <div  className={`bg-flying   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Pyschic Type*/}
            {typeColour == 'psychic' && 
                <div  className={`bg-psychic   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Bug Type*/}
            {typeColour == 'bug' && 
                <div  className={`bg-bug   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Rock Type*/}
            {typeColour == 'rock' && 
                <div  className={`bg-rock   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Ghost Type*/}
            {typeColour == 'ghost' && 
                <div  className={`bg-ghost   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Dragon Type*/}
            {typeColour == 'dragon' && 
                <div  className={`bg-dragon   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Dark Type*/}
            {typeColour == 'dark' && 
                <div  className={`bg-dark   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Steel Type*/}
            {typeColour == 'steel' && 
                <div  className={`bg-steel   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            {/*Fairy Type*/}
            {typeColour == 'fairy' && 
                <div  className={`bg-fairy   rounded-lg    outline-2  outline outline-black outline-2 text-sm text-white items-center justify-center text-center`}>
                    {typeColour}
                </div>
            }
            

        </div>
    )
}