import React from "react";
import Tooltip from "../Tooltip";

const Tabela = ({cabecalho, elementos, botoesAcao, titulo}) =>{
    return(
        <div>
            <h1 className="text-center mb-8 font-bold text-2xl tracking-wider">{titulo}</h1>
            <table className="table-auto">
                <thead className="uppercase text-xs bg-slate-500">
                    <tr>
                        {cabecalho.map((coluna, index) =>(
                            <th scope="col" className="px-4 py-2" key={`headOF_${index}`}>{coluna}</th>
                        ))}
                        {botoesAcao && <th scope="col" className="px-4 py-2"> </th>}
                    </tr>
                </thead>
                <tbody className="text-center">
                    {elementos.map((elemento, index)=>( 
                        <tr className={`${index%2===0?'':'bg-slate-400'}`}>
                            {elemento.map((item) => (
                                <td scope="row" className="px-4 py-2" key={`itemOF_${item}`}>{item}</td>
                            ))}
                            {botoesAcao &&(
                                <td scope="row" className="px-4 py-2">
                                    {botoesAcao.map((botao, index) => (
                                        <Tooltip text={botao.texto} isVisible={true}>
                                            <button key={index} onClick={() => botao.onClick(elemento)}>
                                                {botao.icone}
                                            </button>
                                        </Tooltip>
                                    ))}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tabela