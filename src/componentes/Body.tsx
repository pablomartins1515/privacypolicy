import { Buttonplaceh } from './Buttonplaceh'

export function Body() {

    return (
        
        <body className='flex gap-10 '> 
            <main className='justify-center'>
                <div >
                    <h1 className="py-16 text-center font-black text-5xl text-blue-900">
                        Vai comprar um veículo?
                    </h1>

                    <h2 className="text-center justify-center text-xl">
                        Saber seu histórico nunca foi tão fácil! <br />
                        Por <strong>apenas</strong> <strong className='text-blue-900'>R$ 8,99</strong> consulte pela placa e <br /> receba diversas informações. 😉
                    </h2>

                    <Buttonplaceh />
                </div>

                <span className="max-w-2xl">
                        < img src="https://uploaddeimagens.com.br/images/003/943/464/full/Foto_carro_15-07.png" alt=" Foto carro placa buscar dados consultar dados pela placa" />
                </span>
            </main>
        </body>
    )
}


// className="px-10 max-w-3xl  right-4"




