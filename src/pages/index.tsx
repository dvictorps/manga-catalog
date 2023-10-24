import { Card } from "../components/Card";
import Header from "../components/Header";
import { request } from "../mock/mock";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="bg-cover bg-center flex justify-center flex-col items-center" style={{
                backgroundImage:
                    `url(${'public/images/one-piece-zoro-manga-bm23qxb4xo77mf44.jpg'})`, width: '100%', height: '400px'
            }}>
                <h1 className="text-white text-5xl">Buscar Manga</h1>
                <input placeholder="Buscar mangá" className="h-12 w-96 m-6 rounded-md border-2 p-2" />

            </div>
            <div className="flex flex-row m-3 gap-10 flex-wrap">
                {request.map((requests) => <Card imgSrc={requests.imgSrc} mangaAutor={requests.mangaAutor} mangaName={requests.mangaName} description={requests.description} />)}
            </div>
        </div>
    )
}