import React from "react";
import Template from "../../components/Template";
import Tabela from "../../components/Table";
import { Aguardando, Finalizar, Informacoes } from "../../components/Icons";

export const ApoiosIniciados = () =>{
    const passarApoioAguardando = (item) =>{
        console.log(`Passando o apoio  da OS ${item[0]} para aguardando`)
    }

    const finalizarApoio = (item) =>{
        console.log(`Finalizando o apoio da OS ${item[0]}`)
    }

    const maisInformacoes = (item) =>{
        console.log(`Mais informações da OS ${item[0]}`)
    }
    return(
        <Template>
            <Tabela cabecalho={['OS', 'Cliente', 'Valor de negócio', 'Data', 'Atendente','Responsável']} titulo={'Apoios iniciados'} 
                elementos={[['584321/1','Teste','99','28/04/2024','Leonardo Bernardes','José da Silva'],
                            ['594011/4', 'Volvo','80','30/04/2024','Leonardo Bernardes','Maria Eduarda'],
                            ['594500/198', 'Stefanello','70','30/04/2024','Leonardo Bernardes','Maria Eduarda']
                        ]}
                botoesAcao={[
                    {texto: 'Mais Informações', icone: <Informacoes/>, onClick: item => maisInformacoes(item)},
                    {texto:'Passar para Aguardando', icone: <Aguardando/>, onClick: item => passarApoioAguardando(item)},
                    {texto:'Finalizar', icone: <Finalizar/>, onClick: item => finalizarApoio(item)},
                    
            ]}
            />
        </Template>
    )
}