import React from "react";

const BotaoBase = ({children, classeUnica, onClick}) =>{
    return(
        <button className={`text-white px-4 py-2 rounded-md ml-2 ${classeUnica}`} onClick={onClick}>
            {children}
        </button>
    )
}

export const BotaoPrimario = ({texto, onClick, largura}) =>{
    return(
        <BotaoBase classeUnica={`bg-blue-500 hover:bg-blue-600 ${largura?largura:''}`} onClick={onClick}>
            {texto}
        </BotaoBase>
    )
}

export const BotaoSucesso = ({texto, onClick, largura}) =>{
    return(
        <BotaoBase classeUnica={`bg-green-500 hover:bg-green-600 ${largura?{largura}:''}`} onClick={onClick}>
            {texto}
        </BotaoBase>

    )
}