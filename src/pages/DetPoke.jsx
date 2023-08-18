/* eslint-disable react-hooks/exhaustive-deps */
import useDetails from "../hooks/useDetails"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"
import Charts from "../components/Charts"

const DetPoke = () => {
    const navigate = useNavigate()
    const { getUniquePoke } = useDetails()

    const backPage = () => {
        navigate(-1)
    }
    return (
        <>
            <Navbar showLink={false} />
            {getUniquePoke && getUniquePoke.sprites && getUniquePoke.stats && (
                <>
                    <div>
                        <div className="m-5">
                            <button className="flex justify-between items-center font-bold gap-3 text-center duration-700 bg-[#ff1f1f] text-[#fbd743] p-[10px] rounded-lg hover:bg-[#fbd743] hover:text-[#ff1f1f]" onClick={backPage}><AiOutlineArrowLeft />Voltar </button>
                        </div>
                        <div className="flex flex-col text-center mt-10 items-center">
                            <h1 className="font-bold text-[40px]">{getUniquePoke.name.toUpperCase()}</h1>
                            <div className="flex my-[5px]">
                                {getUniquePoke.types.map((type, i) => <span key={i} className={type.type.name}>{type.type.name.toUpperCase()}</span>)}
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center m-[50px] gap-x-10">
                            <div className="flex flex-col items-center outline-2 outline outline-[#ff1f1f] p-10 mb-6 lg:mb-0 rounded-sm">
                                <img className="w-[150px]" src={getUniquePoke.sprites.front_default} alt={getUniquePoke.name} />
                                <h2 className="font-bold text-[#ff1f1f]">NORMAL</h2>
                            </div>
                            <div className="flex flex-col items-center outline-2 outline outline-[#fbd743] p-10 rounded-sm">
                                <img className="w-[150px]" src={getUniquePoke.sprites.front_shiny} alt={getUniquePoke.name} />
                                <h2 className="font-bold text-[#b89c2f]">SHINY</h2>
                            </div>
                        </div>
                        <Charts getUniquePoke={getUniquePoke.stats} />
                    </div>
                </>
            )}
        </>
    )
}

export default DetPoke