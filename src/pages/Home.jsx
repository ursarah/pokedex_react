import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { AiOutlineArrowRight } from "react-icons/ai"

// components 
import PokeCards from "../components/PokeCards"
import Navbar from "../components/Navbar"

const Home = () => {
    const { pokes } = useFetch(20)
    return (
        <>
            <Navbar form={false} />
            <div>
                <h1 className="font-bold text-[35px] py-[2rem] text-center">Os primeiros 20:</h1>
                <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {pokes.length === 0 && <p className="font-bold bg-[#3B4CCA] text-[#fbd743] p-[10px] rounded-lg hover:bg-[#fbd743] hover:text-[#3B4CCA]">Carregando...</p>}
                    {pokes.map((poke) => (<PokeCards key={poke.data.id} poke={poke} showLink={false} />))}


                    <Link className="absolute bottom-[50px] right-[100px] flex justify-between items-center font-bold gap-3 text-center duration-700 bg-[#ff1f1f] text-[#fbd743] p-[10px] rounded-lg hover:bg-[#fbd743] hover:text-[#ff1f1f]" to="pokemon">Ver Mais... <AiOutlineArrowRight /></Link>


                </div>
            </div>
        </>
    )
}

export default Home