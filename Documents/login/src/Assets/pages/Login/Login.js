import React, { useState } from "react";
import Title from "./Components/Title/Title";
import Label from "./Components/Label/Label";
import Input from "./Components/Input/Input";
import "./Login.css"

 const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

        function handleChange(name, value){
            if(name ==='usuario'){
                setUser(value)
            }
            else {
                setPassword(value)
            }
        };  

        function handleSubmit(){
            let account = {user, password}
            if (account) {
                console.log('account:', account)
            }
        }

        console.log('usuario', user)

     return (
         <div className="login-container"> 
            <Title text="SoftgNet" /> 
            <Label text="Usuario" />
            <Input
            attribute={{
                id: "usuario",
                name: "usuario",
                type: "text",
                placeholder: 'ingrese su usuario'
            }}
            handleChange={handleChange}
            />
            <Label text="Contraseña" />
            <Input
            attribute={{
                id: "contraseña",
                name: "constraseña",
                type: "password",
                placeholder: 'ingrese su constraseña'
            }}
            handleChange={handleChange}
            />
            <button onClick={handleSubmit}>
                Ingresar
            </button>
        </div>
     )
 }

 export default Login;