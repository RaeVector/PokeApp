import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <div className="flex flex-row flex-col content-center justify-center align-center items-center p-10">
                    <Image
                            src={'/pokeball.png'}
                            width={30}
                            height={30} alt={"pokeball"}
                        />
                    <Link href="/">
                        <span className="self-center text-4xl font-semibold  p-2">
                            Pokédex Browser
                        </span>
                    </Link>
            <div>
                <h1 className="self-center text-xl text-slate-400 font-semibold  p-2">
                    Search and find Pokémon!
                </h1>
            </div>
        </div>
    )
}