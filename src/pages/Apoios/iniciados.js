import React, {useState} from "react";
import Template from "../../components/Template";
import Tabela from "../../components/Table";
import { Aguardando, Finalizar, Informacoes } from "../../components/Icons";
import Modal from "../../components/Modal";

export const ApoiosIniciados = () =>{
    const [modalOpen, setModalOpen] = useState(false);

    const passarApoioAguardando = (item) =>{
        console.log(`Passando o apoio  da OS ${item[0]} para aguardando`)
    }

    const finalizarApoio = (item) =>{
        console.log(`Finalizando o apoio da OS ${item[0]}`)
    }

    const maisInformacoes = (item) =>{
        setModalOpen(true)
    }

    return(
        <Template>
            <div>
                <h1 className="text-center mb-8 font-bold text-2xl tracking-wider">Apoios Iniciados</h1>            
                <Tabela cabecalho={['OS', 'Cliente', 'Valor de negócio', 'Data', 'Atendente','Responsável']}
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
            </div>
            <Modal isOpen={modalOpen}
            closeModal={()=>{setModalOpen(false)}}
            titulo={"Informações do Apoio"} 
            campos={[
                    {label: 'Solicitado', tipo:'textarea', somenteLeitura:true, texto:'Texto com o solicitado do apoio. Aqui ficará o texto informado no momento da abertura da OS'},
                    {label: 'Observação', tipo:'textarea', somenteLeitura:true, texto:'Texto com a observação do apoio. Aqui ficarão as informações necessárias para o atendimento'},
            ]}
            />
        </Template>
    )
}