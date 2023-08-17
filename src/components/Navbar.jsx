/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"
import useForm from "../hooks/useForm"

const Navbar = ({ form }) => {
    const { handleSubmit, pokeFilter } = useForm()
    return (
        <nav className="flex items-center justify-between py-[2rem] px-[1rem] bg-[#121212] outline-3 outline outline-[#fbd743]">
            <div className="flex items-center gap-[0.5rem] ">
                <img className="w-[3em]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="Pokeball" />
                <Link className="text-[#ff1f1f] font-bold text-[30px]" to="/">Poke<span className="text-[#fbd743]">dex</span></Link>
            </div>
            {form &&
                <form className="flex gap-[0.5rem]" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Busque um Pokemon" className="outline-2 outline outline-[#fbd743] px-[.5em] rounded-sm" onChange={(e) => pokeFilter(e.target.value)} />
                    <button className="p-[5px] outline-2 outline outline-[#ff1f1f] bg-[#000] text-[#fbd743] duration-[.3s] rounded-sm hover:bg-[#fbd743] hover:text-[#000]" type="submit"><BiSearchAlt2 /></button>
                </form>
            }
        </nav>
    )
}

export default Navbar