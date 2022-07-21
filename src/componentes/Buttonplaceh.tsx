import { FormEvent, useState } from "react";

export function Buttonplaceh() {

    const [comment, setComment] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        console.log(
            comment,
        );
    }

    return (

        <div className='m-12 flex flex-auto justify-items-center justify-center '>

            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        className="min-w-[240px]  max-w-[380px] max-h-[64px] shadow px-3 py-2 text-lg placeholder-zinc-400 text-gray-800 bg-white rounded-md border border-gray-400 focus:ring-blue-900 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-gray-700 scroolbar-track-transparent scrollbar-thin "
                        placeholder="Digite a Placa do veículo..."
                        onChange={event => setComment(event.target.value)}
                    />
                </div>

                <div>

                    <button className="py-5 flex ">
                        <a
                            href="https://contate.me/BuscarDados"
                            className="min-w-[240px]  max-w-[380px] shadow flex justify-center py-3 border border-transparent text-lg font-semibold rounded-md text-white bg-green-800 hover:bg-blue-900"
                        >
                            Consultar Placa!
                        </a>
                    </button>
                </div>


            </form>

        </div >
    )
}

/*

   <footer className=" flex gap-2 mt-2" >

    <button
    type="submit"
    disabled={comment.length === 0}
    className=" p-2 bg-green-800 rounded-md border-transparent flex-1 flex justify-center items-center text-lg text-white font-semibold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 focus:ring-blue-900 disabled:opacity-50 disabled:hover:bg-blue-900"
    >
    Fazer Consulta                      
    </button> 

    </footer > */

