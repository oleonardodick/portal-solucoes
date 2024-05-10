import React, {useState, useEffect} from "react";
import Template from "../../components/Template";
import Tabela from "../../components/Table";
import { Iniciar, Informacoes } from "../../components/Icons";
import Modal from "../../components/Modal";
import { BotaoPrimario } from "../../components/Button";
import apoioRepository from "../../repositories/apoio";

export const ApoiosAguardando = () =>{
    const [dadosApoios, setDadosApoios] = useState([]);
    const [infoApoios, setInfoApoios] = useState([]);
    const [apoioSelecionado, setApoioSelecionado] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() =>{
        apoioRepository.getApoiosAguardando()
        .then((apoios) =>{
            const dadosDoApoio = apoios.map(apoio =>({
                numero:apoio.numero + '/' + apoio.item,
                cliente: apoio.cliente,
                valorNegocio: apoio.valorNegocio,
                data:apoio.dataCriacao,
                responsavel: apoio.responsavel,
                aguardandoDesde: apoio.aguardandoDesde
            }));
            setDadosApoios(dadosDoApoio)

            const infosDoApoio = apoios.map(apoio =>({
                numero:apoio.numero + '/' + apoio.item,
                motivoAguardando:apoio.motivoAguardando
            }));

            

            setInfoApoios(infosDoApoio)

        })
        .catch((err) =>{
            console.log(err.message);
        });
    },[])

    const retomarApoio = (item) =>{
        alert(`Deseja realmente retomar o apoio da OS ${item[0]}?`)
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
                <h1 className="text-center mb-8 font-bold text-2xl tracking-wider">Apoios Aguardando</h1>            
                <Tabela cabecalho={['OS', 'Cliente', 'Valor de negócio', 'Data','Responsável','Aguardando desde']}
                    elementos={dadosApoios}
                    botoesAcao={[
                        {texto: 'Mais Informações', icone: <Informacoes/>, onClick: item => maisInformacoes(item)},
                        {texto: 'Retomar apoio', icone: <Iniciar/>, onClick: item => retomarApoio(item)},
                        
                ]}
                />
            </div>
            {modalOpen && (
                <Modal
                    closeModal={()=>{setModalOpen(false)}}
                    titulo={"Informações do Apoio"} 
                    campos={[
                            {label: 'Motivo Aguardando', tipo:'textarea', somenteLeitura:true, texto:infoApoios.find(item => item.numero === apoioSelecionado.numero).motivoAguardando},
                    ]}
                    botoes={[
                        {botao:<BotaoPrimario texto={'Fechar'} onClick={fecharModal}/>}
                    ]}
                />
            )}

        </Template>
    )
}