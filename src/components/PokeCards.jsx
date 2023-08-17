import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const PokeCards = ({ poke, showLink }) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center shadow-[0_10px_15px_5px_rgba(0,0,0,0.3)] w-[300px] py-[15px]">
                <h2 className="font-bold">{poke.data.name.toUpperCase()}</h2>
                <img src={poke.data.sprites.front_default} alt={poke.data.name} />
                {showLink && (<Link className="font-bold duration-700 bg-[#3B4CCA] text-[#fbd743] p-[10px] rounded-lg hover:bg-[#fbd743] hover:text-[#3B4CCA]" to={`det-pokemon/${poke.data.id}`}>Detalhes</Link>)}
            </div>
        </>
    )
}

export default PokeCards