import "./register.scss"
import React, { useRef, useState } from "react"




export default function Register() {

    const [email, setEmail] =useState("")
    const [password, setpassword] =useState("")

    const emailRef = useRef("")
    const passwordRef = useRef("")


    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        setpassword(passwordRef.current.value);
    }

  return (
  <div className="register">
    <div className="top">
        <div className="wrapper">
            <img src="https://i.postimg.cc/g0GVjD7w/logo.png"
             alt="logo-cinearcoiris" className="logo" />
            <button className="loginButton">Entrar</button>
        </div>
    </div>
    <div className="container">
        <h1>Filmes, Series e muito mais sobre o tema LGBTQ+</h1>
        <h2>assista em qualquer lugar, quando quiser</h2>
        <p>Pronto para assistir? Digite seu e-mail para criar ou reiniciar sua conta</p>
        {
        !email ?(
        <div className="input">
            <input type="email"  placeholder=" Insira seu E-mail" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
                Vamos começar
            </button>
        </div>
        ):(
            <form className="input">
            <input type="password"  placeholder=" Insira sua senha" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>Criar
            </button>
            </form>
        )
        }
        
    </div>
    </div>
    
  )
}


