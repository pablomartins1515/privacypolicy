import { Sidebar } from "../componentes/Sidebar"
import { Header } from "../componentes/Header"
import { Duvidas } from "../componentes/Duvidas"
import Faq from "../componentes/Faq"
import { BottomStyle } from "../componentes/BottomStyle"
import { Body } from "../componentes/Body"
import { Rodape } from "../componentes/Rodape"

export function Event () {
    return (
        <div>
            <Header />
            <Body />
            <Duvidas />
            <Faq /> 
            <BottomStyle />
            <Rodape />                     
        </div>    
    )        
}