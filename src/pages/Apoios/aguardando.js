import React, {useState} from "react";
import Template from "../../components/Template";
import Tabela from "../../components/Table";
import { Iniciar, Informacoes } from "../../components/Icons";
import Modal from "../../components/Modal";

export const ApoiosAguardando = () =>{
    const [modalOpen, setModalOpen] = useState(false);

    const retomarApoio = (item) =>{
        alert(`Deseja realmente retomar o apoio da OS ${item[0]}?`)
    }

    const maisInformacoes = (item) =>{
        setModalOpen(true)
    }

    return(
        <Template>
            <div>
                <h1 className="text-center mb-8 font-bold text-2xl tracking-wider">Apoios Aguardando</h1>            
                <Tabela cabecalho={['OS', 'Cliente', 'Valor de negócio', 'Data','Responsável','Aguardando desde']}
                    elementos={[['584321/1','Teste','99','28/04/2024','José da Silva','30/04/2024'],
                                ['594011/4', 'Volvo','80','30/04/2024','Maria Eduarda','01/05/2024'],
                                ['594500/198', 'Stefanello','70','30/04/2024','Maria Eduarda','01/05/2024']
                            ]}
                    botoesAcao={[
                        {texto: 'Mais Informações', icone: <Informacoes/>, onClick: item => maisInformacoes(item)},
                        {texto: 'Retomar apoio', icone: <Iniciar/>, onClick: item => retomarApoio(item)},
                        
                ]}
                />
            </div>
            <Modal isOpen={modalOpen}
            closeModal={()=>{setModalOpen(false)}}
            titulo={"Informações do Apoio"} 
            campos={[
                    {label: 'Motivo aguardando', tipo:'textarea', somenteLeitura:true, texto:'Aguardando log e documentação do usuário'},
            ]}
            />
        </Template>
    )
}