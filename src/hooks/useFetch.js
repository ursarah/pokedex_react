/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

const useFetch = (limit) => {
    const [allPokemon, setAllPokemon] = useState([])

    const getAllPokes = async () => {
        let pokesURL = "https://pokeapi.co/api/v2/"

        const res = await fetch(`${pokesURL}pokemon/?limit=${limit}`)
        const data = await res.json()

        const promise = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()

            return data
        })


        const results = await Promise.all(promise)
        setAllPokemon(results)
    }

    useEffect(() => {
        getAllPokes()
    }, [])

    return { allPokemon, setAllPokemon, getAllPokes }
}

export default useFetch