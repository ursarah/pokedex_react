/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const useDetails = () => {
    const { id } = useParams()
    const [getUniquePoke, setGetUniquePoke] = useState([])


    try {
        const uniquePoke = async (url) => {
            const res = await fetch(`${url}pokemon/${id}`)
            const data = await res.json()

            setGetUniquePoke(data)
        }

        useEffect(() => {
            const pokesURL = "https://pokeapi.co/api/v2/"
            uniquePoke(pokesURL)
        }, [])

    } catch (error) {
        console.log(error.message);
    }


    return { getUniquePoke }
}

export default useDetails