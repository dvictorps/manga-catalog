import Header from "../../components/Header";

export default function Adicionar() {
    return (

        <>
            <Header />
            <div className="flex flex-col items-center mt-10 h-screen w-full">
                <h1 className="text-5xl">Adicionar Manga</h1>
                <div className=" flex flex-col w-auto justify-center mt-12 items-center">
                    <div className="flex flex-col">
                        <label>Nome do Mangá</label>
                        <input className="border-2 border-slate-300 rounded-md p-2 w-96" placeholder="Escreva o nome do manga" />
                    </div>
                    <div className="flex flex-col">
                        <label >Autor</label>
                        <input className="border-2 border-slate-300 rounded-md p-2 w-96" placeholder="Escreva o nome do autor" />
                    </div>
                    <div className="flex flex-col">
                        <label>Ano de lançamentoo</label>
                        <input className="border-2 border-slate-300 rounded-md p-2 w-96" placeholder="Selecione o ano de lançamento" type="datetime-local" />
                    </div>
                    <div className="flex flex-col">
                        <label>Descrição</label>
                        <input className="border-2 border-slate-300 rounded-md p-2 w-96" placeholder="Escreva uma descrição" />
                    </div>
                    <div className="flex flex-col">
                        <label>Status</label>
                        <input className="border-2 border-slate-300 rounded-md p-2 w-96" placeholder="Selecione o Status" />
                    </div>
                    <div className="flex flex-col">
                        <label>Selecione uma imagem</label>
                        <input className="border-2 border-slate-300 rounded-md p-2 w-96" placeholder="Selecione o Status" type="file" />
                    </div>
                    <button type="submit" className="bg-purple-950 w-32 h-12 rounded-lg text-white mt-4 hover:bg-purple-900">Adicionar</button>
                </div>

            </div >
        </>


    )
}