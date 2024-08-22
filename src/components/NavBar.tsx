export default function NavBar(){
    return(
        <nav className=" flex flex border-blue-200">
            <div className="w-max flex flex-wrap items-center justify-between mx-auto p-1">
                <div className="w-full md:block md:w-auto" id="navbar">
                     <input className=" font-bold rounded-lg  outline outline-slate-400 outline-offset-3 bg-white text-black text-center " placeholder="Search pokemon.."/>
                </div>
            </div>
        </nav>

    )
}