import React from "react";

const Modal = ({closeModal, titulo, campos, botoes }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg w-max">
        <div className="flex justify-between items-center bg-gray-200 p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">{titulo}</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={closeModal}
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="p-4">
          {campos.map((campo) => (
            <div key={campo.label}>
              <label
                htmlFor={campo.label}
                className="block text-sm font-medium leading-6 text-gray-900"
                key={`lbl${campo.label}`}
              >
                {campo.label}
              </label>
              {campo.tipo === "textarea" && (
                <TextArea texto={campo.texto} somenteLeitura={campo.somenteLeitura} key={`txt${campo.label}`} />
              )}
            </div>
          ))}
        </div>
        {botoes && (
          <div className="bg-gray-200 p-4 rounded-b-lg flex justify-end">
            {botoes.map((botao) =>(
              botao.botao
            ))}
          </div>
        )}            
      </div>
    </div>
  );
};

const TextArea = ({ texto, somenteLeitura }) => {
  return (
    <textarea
      rows={4}
      className="w-96 border border-black rounded-lg p-2"
      readOnly={somenteLeitura}
      value={texto} // Use value em vez de children para textarea
    />
  );
};

export default Modal;
