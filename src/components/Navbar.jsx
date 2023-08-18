/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Navbar = ({ form, pokeFilter }) => {
    return (
        <nav className="w-full flex flex-col content-center lg:flex-row items-center lg:justify-between py-[2rem] px-[1rem] bg-[#121212] outline-3 outline outline-[#fbd743]">
            <div className="flex items-center gap-[0.5rem] ">
                <img className="w-[3em]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="Pokeball" />
                <Link className="text-[#ff1f1f] font-bold mb-[10px] text-[30px]" to="/">Poke<span className="text-[#fbd743]">dex</span></Link>
            </div>
            {form &&
                <form className="flex gap-[0.5rem]">
                    <input type="text" placeholder="Busque um Pokemon" className="outline-2 outline outline-[#fbd743] px-[.5em] rounded-sm" onChange={(e) => pokeFilter(e.target.value)} />
                </form>
            }
        </nav>
    )
}

export default Navbar