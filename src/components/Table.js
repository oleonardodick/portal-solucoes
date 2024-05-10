import React, { useState } from "react";
import Tooltip from "./Tooltip";

const Tabela = ({cabecalho, elementos, botoesAcao}) =>{
    const pageSize = 5;
    const totalButtons = 5
    const [currentPage, setCurrentPage] = useState(1)
    const [firstButton, setFirstButton] = useState(1)
    const [lastButton, setLastButton] = useState(totalButtons)

    const totalPages = Math.ceil(elementos.length/pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, elementos.length - 1)
    const currentItems = elementos.slice(startIndex, endIndex + 1);

    const goToPage = (page) => {
        setFirstButton(page);
        setLastButton(page + totalButtons-1)
        setCurrentPage(page);
    }

    return(
        <div className="w-max">
            <table className="table-auto shadow-lg">
                <thead className="uppercase text-xs bg-slate-500">
                    <tr key={"cabecalho"}>
                        {cabecalho.map((coluna, index) =>(
                            <th scope="col" className="px-4 py-2" key={`headOF_${index}`}>{coluna}</th>
                        ))}
                        {botoesAcao && <th scope="col" className="px-4 py-2"> </th>}
                    </tr>
                </thead>
                <tbody className="text-center">
                    {currentItems.map((elemento, index) =>(
                        <tr className={`${index%2===0?'':'bg-slate-400'}`} key={index}>
                        {Object.values(elemento).map((item, indexItem) =>(
                            <td className="px-4 py-2" key={`itemOF_${indexItem}`}>{item}</td>
                        ))}
                        {botoesAcao &&(
                                <td className="px-4 py-2">
                                    {botoesAcao.map((botao, index) => (
                                        <Tooltip text={botao.texto} isVisible={true} key={index}>
                                            <button onClick={() => botao.onClick(elemento)}>
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
            <div className="flex justify-end">
                <ul className="mt-1 text-sm font-bold">
                    <li className="inline-block border border-black" key="btnAnterior">
                        <button onClick={() => goToPage(currentPage-1)} disabled={currentPage===1} className="px-2 py-1 hover:bg-gray-400">
                            Anterior
                        </button>
                    </li>
                    {Array.from({length:totalPages}).map((_,index)=>(
                        (index+1 >= firstButton && index+1 <= lastButton) && (
                            <li className={`inline-block border border-black`} key={`btn${index+1}`}>
                            <button onClick={() => goToPage(index+1)} className="px-2 py-1 hover:bg-gray-400">
                                {index+1}
                            </button>
                        </li>
                        )
                    ))}
                    <li className="inline-block border rounded-r-sm border-black" key="btnProxima">
                        <button onClick={() => goToPage(currentPage+1)} disabled={currentPage===totalPages} className="px-2 py-1 hover:bg-gray-400">
                            Próxima
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Tabela