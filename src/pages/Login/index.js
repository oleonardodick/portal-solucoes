import React, { useContext, useState } from "react";
import { BotaoPrimario } from "../../components/Button";
import Input from "../../components/Input";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const initialValues = {
        usuario:'',
        senha:''
    }
    const [form, setForm] = useState([initialValues]);
    const {auth, setAuth} = useContext(AuthContext);
    const navigate = useNavigate()

    // const handleLogin = () =>{
    //     onLogin({usuario, senha});
    //     setAuth(true);
    //     Navigate("/home");
    // }

    const handleChange = (event) =>{
        setForm({...form, [event.target.name]:event.target.value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(form)
        if(form.usuario === 'teste' && form.senha === '123'){
            setAuth(true);
            navigate('/home');
            alert('Logado com sucesso')
        } else {
            alert ('Não logou')
        }
    }

    return (
        <div className="flex w-screen h-screen bg-gray-800 items-center justify-center">
                <div className="bg-white flex flex-col w-1/4 h-1/2 border border-black shadow-lg p-3 rounded-xl">
                    <form>
                        <h1 className="text-center text-4xl">Login</h1>
                        <hr className="mt-2"/>
                        <Input 
                            id = "usuario"
                            labelText = "Usuário"
                            tipo = "text"
                            onChange = {handleChange}
                            name = "usuario"
                        />
                        <Input 
                            id = "senha"
                            labelText = "Senha"
                            tipo = "password"
                            onChange = {handleChange}
                            name = "senha"
                        />
                        <div className="w-full flex justify-center mt-4">
                            <BotaoPrimario onClick={handleSubmit} texto={"Login"} largura={"w-1/2"}/>
                        </div>
                    </form>
                </div>



                {/* <div className="w-full flex justify-center mt-4">
                    <BotaoPrimario onClick={alert('oi')} texto={"Login"} largura={"w-1/2"}/>
                </div> */}

        </div>
    )
};

export default Login;