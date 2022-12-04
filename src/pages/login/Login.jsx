import "./login.scss"

export default function Login() {

  return (
  <div className="login">
    <div className="top">
        <div className="wrapper">
            <img src="https://i.postimg.cc/g0GVjD7w/logo.png" alt="logo-cinearcoiris" className="logo" />
        </div>
    </div>
    <div className="container">
        <form action="">
            <h1>Entrar</h1>
            <input type="email" placeholder="Insira seu E-mail"/>
            <input type="password" placeholder="Insira sua Senha"/>
            <button className="loginButton">Entrar</button>
            <span>Novo por aqui ? <b>Se cadastre aqui!</b></span>
            <small>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você não seja um bot. <b>Saiba mais</b>
            </small>
        </form>
    </div>
    </div>
    
  )
}


