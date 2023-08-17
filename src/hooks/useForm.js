import useFetch from "../hooks/useFetch"

const useForm = () => {
    const { pokes, setPokes } = useFetch(151)

    const pokeFilter = (name) => {
        const pokeFiltered = pokes.filter(poke => poke.data.name.includes(name))
        setPokes(pokeFiltered)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!pokes) return
    }

    return { handleSubmit, pokeFilter, pokes }
}

export default useForm