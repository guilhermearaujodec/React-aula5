
import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login =()=>{


    const usuario = useRef();
    const senha = useRef();

    return (
        <section className="container">
            <div className="container-login">
            <div className="login">

            <form className="login-form">
                <span className="titulo-login" >Faça seu Login</span>

                <div className="w-input">
                    <input
                        type="text"
                        className="input-form"
                        id="usuario"
                        ref={usuario}               
                    />
                    <span placeholder="usuario"></span>
                </div>

                <div className="w-input">
                    <input
                        type="password"
                        className="input-form"
                        id="senha"
                        ref={senha}               
                    />
                    <span placeholder="senha"></span>
                </div>

               <div className="login-btn">
                    <button className="login-form-btn">Login</button>
               </div>

               <ul className="utilidades">
                    <li>
                        <span className="texto1">Esqueçeu sua senha?</span>
                    </li>
                    <li>
                        <span className="texto1">Não possui conta?</span>

                        <a href="#" className="texto2">Criar Conta</a>
                    </li>
               </ul>
            </form>
            </div>
            <img src="" alt="logo Imagem"/>
            </div>
        </section>
    )
}
export default Login
