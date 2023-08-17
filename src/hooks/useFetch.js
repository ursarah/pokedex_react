/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (count) => {
    const endpoints = []
    const [pokes, setPokes] = useState([])

    for (let i = 1; i <= count; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    useEffect(() => {
        pokeAPI()
    }, [])


    const pokeAPI = () => {
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => { setPokes(res) })
    }
    return { pokes, setPokes }
}

export default useFetch