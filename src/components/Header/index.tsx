import { GrCatalog } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'



export default function Header() {

    const navigate = useNavigate()

    return (
        <div className="flex bg-purple-950 h-20 justify-between items-center p-4">
            <div className='flex flex-row gap-1 text-white items-center'>
                <GrCatalog className="bg-white w-8 h-8 p-1 rounded-xl" />
                <h1 className='text-2xl font-medium'>MangaCatalog</h1>
            </div>
            <div className='text-white font-medium'>
                <button onClick={() => navigate("/")} className="hover:bg-purple-900 p-3 rounded-xl" >Home</button>
                <button onClick={() => navigate("/adicionar")} className="hover:bg-purple-900 p-3 rounded-xl">Adicionar</button>
            </div>
        </div>

    )
}