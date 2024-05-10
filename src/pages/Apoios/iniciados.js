import React, {useState, useEffect} from "react";
import Template from "../../components/Template";
import Tabela from "../../components/Table";
import { Aguardando, Finalizar, Informacoes } from "../../components/Icons";
import Modal from "../../components/Modal";
import apoioRepository from "../../repositories/apoio"
import { BotaoPrimario } from "../../components/Button";

export const ApoiosIniciados = () =>{
    const [dadosApoios, setDadosApoios] = useState([]);
    const [infoApoios, setInfoApoios] = useState([]);
    const [apoioSelecionado, setApoioSelecionado] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() =>{
        apoioRepository.getApoiosIniciados()
        .then((apoios) =>{
            const dadosDoApoio = apoios.map(apoio =>({
                numero:apoio.numero + '/' + apoio.item,
                cliente: apoio.cliente,
                valorNegocio: apoio.valorNegocio,
                data:apoio.dataCriacao,
                atendente: apoio.atendente,
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

    const passarApoioAguardando = (item) =>{
        console.log(`Passando o apoio  da OS ${item[0]} para aguardando`)
    }

    const finalizarApoio = (item) =>{
        console.log(`Finalizando o apoio da OS ${item[0]}`)
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
                <h1 className="text-center mb-8 font-bold text-2xl tracking-wider">Apoios Iniciados</h1>            
                <Tabela cabecalho={['OS', 'Cliente', 'Valor de negócio', 'Data', 'Atendente','Responsável']}
                    elementos={dadosApoios}
                    botoesAcao={[
                        {texto: 'Mais Informações', icone: <Informacoes/>, onClick: item => maisInformacoes(item)},
                        {texto:'Passar para Aguardando', icone: <Aguardando/>, onClick: item => passarApoioAguardando(item)},
                        {texto:'Finalizar', icone: <Finalizar/>, onClick: item => finalizarApoio(item)},
                        
                ]}
                />
            </div>
            {modalOpen && (
                <Modal isOpen={modalOpen}
                       closeModal={()=>{setModalOpen(false)}}
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