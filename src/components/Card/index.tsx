import { useNavigate } from "react-router-dom"
type CardProps = {
    imgSrc: string
    mangaName: string
    mangaAutor: string
    description: string
}

export function Card({ imgSrc, mangaAutor, mangaName, description }: CardProps) {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col w-96 h-auto bg-purple-950 rounded-lg p-3">
            <img src={imgSrc} className=" max-w-full  rounded-lg justify-center" />
            <h1 className="text-white text-3xl">{mangaName}</h1>
            <div className="flex flex-col text-white  mt-4">
                <p>
                    {description}
                </p>
                <div className=" justify-between items-center flex flex-row mt-4 ">
                    <button onClick={() => navigate(`/manga`)} className="border-2 border-white p-2 rounded-md hover:bg-purple-900">Veja mais sobre</button>
                    <p>{mangaAutor}</p>
                </div>
            </div>

        </div>
    )
}