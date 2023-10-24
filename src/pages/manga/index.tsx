import { request } from "../../mock/mock";
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import Header from "../../components/Header";

const requestParam = request[0]

export default function Manga() {
    return (
        <>
            <Header />
            <div className="flex justify-center m-12 gap-6">
                <div>
                    <img src={requestParam.imgSrc} className="w-96 rounded-lg" />
                </div>
                <div className="mx-2">
                    <h1 className="text-5xl font-medium">{requestParam.mangaName}</h1>
                    <div className="flex flex-col justify-between my-3">
                        <div className="flex flex-row items-center gap-2">
                            <BiUserCircle className="w-6 h-6" />
                            <p> {requestParam.mangaAutor}</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <AiOutlineCalendar className="w-6 h-6" />
                            <p>  {requestParam.publishDate}</p>
                        </div>

                    </div>
                    <div className="flex gap-10 flex-col">
                        <div className="flex flex-wrap max-w-2xl">
                            <p>
                                {requestParam.description}
                            </p>
                        </div>
                        <div>
                            <span className="text-2xl font-bold">Status:</span>
                            <p>Em andamento</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}