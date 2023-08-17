import useFetch from "../hooks/useFetch"

const useForm = () => {
    const { allPokemon, setAllPokemon } = useFetch(151)

    const pokeFilter = (name) => {
        let pokesFiltered = []
        pokesFiltered = allPokemon.filter(poke => poke.name.includes(name))
        setAllPokemon(pokesFiltered)
    }

    return { allPokemon, pokeFilter }
}

export default useForm