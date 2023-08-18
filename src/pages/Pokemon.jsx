
import Navbar from "../components/Navbar"
import PokeCards from "../components/PokeCards"
import useFetch from "../hooks/useFetch"

const Pokemon = () => {
    const { allPokemon, setAllPokemon, getAllPokes } = useFetch(151)

    const pokeFilter = (name) => {
        let pokesFiltered = []
        pokesFiltered = allPokemon.filter(poke => poke.name.includes(name))
        if (name === "") {
            getAllPokes()
        }
        setAllPokemon(pokesFiltered)
    }

    return (
        <>
            <Navbar form={true} pokeFilter={pokeFilter} />
            <div>
                <h1 className="font-bold text-[35px] py-[2rem] text-center">Os primeiros 151:</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {allPokemon.length === 0 && <p className="font-bold  bg-[#3B4CCA] text-[#fbd743] p-[10px] rounded-lg hover:bg-[#fbd743] hover:text-[#3B4CCA]">Carregando...</p>}
                    {allPokemon.map(poke => <PokeCards key={poke.id} poke={poke} showLink={true} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Pokemon