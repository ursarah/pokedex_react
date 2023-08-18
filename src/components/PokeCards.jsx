import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const PokeCards = ({ poke, showLink }) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center shadow-[0_10px_15px_5px_rgba(0,0,0,0.3)] py-[15px] w-full">
                <h2 className="font-bold">{poke.name.toUpperCase()}</h2>
                <img src={poke.sprites.front_default} alt={poke.name} />
                <div className="flex my-[5px]">
                    {poke.types.map((type, i) => <span key={i} className={type.type.name}>{type.type.name.toUpperCase()}</span>)}
                </div>
                {showLink && (<Link className="font-bold duration-700 bg-[#3B4CCA] text-[#fbd743] py-[6px] px-[10px] rounded-lg hover:bg-[#fbd743] hover:text-[#3B4CCA]" to={`detPokemon/${poke.id}`}>Detalhes</Link>)}
            </div>
        </>
    )
}

export default PokeCards