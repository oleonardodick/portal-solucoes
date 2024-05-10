import React, {useEffect, useState} from "react";
import Template from "../../components/Template";
import Tabela from "../../components/Table";
import { Iniciar, Informacoes } from "../../components/Icons";
import Modal from "../../components/Modal";
import apoioRepository from "../../repositories/apoio"
import { BotaoPrimario } from "../../components/Button";

export const ApoiosPendentes = () =>{
    const [dadosApoios, setDadosApoios] = useState([]);
    const [infoApoios, setInfoApoios] = useState([]);
    const [apoioSelecionado, setApoioSelecionado] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() =>{
        apoioRepository.getApoiosPendentes()
        .then((apoios) =>{
            const dadosDoApoio = apoios.map(apoio =>({
                numero:apoio.numero + '/' + apoio.item,
                cliente: apoio.cliente,
                valorNegocio: apoio.valorNegocio,
                data:apoio.dataCriacao,
                responsavel: apoio.responsavel,
            }));
            setDadosApoios(dadosDoApoio)

            const infosDoApoio = apoios.map(apoio =>({
                numero:apoio.numero + '/' + apoio.item,
                solicitado:apoio.solicitado,
                observacao:apoio.observacao
            }));

            setInfoApoios(infosDoApoio)

        })
        .catch((err) =>{
            console.log(err.message);
        });
    },[])

    const iniciarApoio = async (item) =>{
        const resposta = window.confirm(`Deseja realmente iniciar o apoio da OS ${item.numero}?`);
        if(resposta){
            const OS = item.numero.split('/');
            item.numero = OS[0];
            item.item = OS[1];
            item.atendente = "Leonardo Bernardes"
            const response = await  apoioRepository.iniciaApoioPendente(item);
            if(response === 200){
                setDadosApoios(dadosApoios.filter((apoio) => apoio.numero !== item.numero && apoio.item !== item.item));
            }
        }
    }

    const maisInformacoes = (item) =>{
        setApoioSelecionado(item)
        setModalOpen(true)
    }

    const fecharModal = () =>{
        setModalOpen(false);
    }

    return(
        <Template>
            <div>
                <h1 className="text-center mb-8 font-bold text-2xl tracking-wider">Apoios Pendentes</h1>            
                <Tabela cabecalho={['OS', 'Cliente', 'Valor de negócio', 'Data','Responsável']}
                elementos={dadosApoios}
                botoesAcao={[
                    {texto: 'Mais Informações', icone: <Informacoes/>, onClick: item => maisInformacoes(item)},
                    {texto: 'Iniciar', icone: <Iniciar/>, onClick: item => iniciarApoio(item)},
                    
                ]}
                />
            </div>
            {modalOpen && (
                <Modal 
                closeModal={()=>{fecharModal()}}
                titulo={"Informações do Apoio"} 
                campos={[
                        {label: 'Solicitado', tipo:'textarea', somenteLeitura:true, texto:infoApoios.find(item => item.numero === apoioSelecionado.numero).solicitado},
                        {label: 'Observação', tipo:'textarea', somenteLeitura:true, texto:infoApoios.find(item => item.numero === apoioSelecionado.numero).observacao},
                ]}
                botoes={[
                    {botao:<BotaoPrimario texto={'Fechar'} onClick={fecharModal}/>}
                ]}
                />
            )}

        </Template>
    )
}