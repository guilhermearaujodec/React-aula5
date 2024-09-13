
import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login =()=>{

    // Hook- useRef pega a referência de um elemento ou componente e guarda
    const usuario = useRef();
    const senha = useRef();

    //Hook - useState - Manipula o estado da variavel
    const [usuarios,setUsuarios]=useState([]);

    // Hook - useNavigate - ele redireciona para outro componente
    const navigate = useNavigate();

    // criando uma função de validição
    function validate(){
        for(let i=0; i <usuarios.length;i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha == senha.current.value
            ){
                return true;
            }
        }
    }



    // criando a função handleSubmit
    const handleSubmit=(e)=>{
        // previne qualquer alteração no navegador ex. load
        e.preventDefault();

        if(validate()){
            let token=
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario);
                sessionStorage.setItem("senha", token);
                navigate("/dashboard")
        }
    }

    // Hook - useEffect realiza um efeito colateral, no exemplo ele vai até api e traz os dados

    useEffect(()=>{
        // pegando a url da api
        fetch("http://localhost:5000/usuarios")

    .then((res)=>{
        // converte os dados em json
        return res.json();
    })
    .then((res)=>{
        // realiza as alterações das variáveis
        setUsuarios(res);
    })

    }

)

    return (
        <section className="container">
            <div className="container-login">
            <div className="login">

            <form className="login-form" onSubmit={handleSubmit}>
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
