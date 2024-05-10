import React from "react";

const Input = ({id, labelText, tipo, onChange, name}) =>{
    return(
        <div className="flex flex-col mb-4">
            <label className="mb-1" htmlFor={id}>
                {labelText}
            </label>
            <input className="border border-black p-2" type={tipo} id={id} placeholder={labelText} name={name} onChange={onChange}/>
        </div>
    )
}

export default Input;