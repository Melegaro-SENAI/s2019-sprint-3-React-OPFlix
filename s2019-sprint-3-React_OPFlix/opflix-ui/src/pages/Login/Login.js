import React, { Component } from "react";

import Axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            nome: "",
            email: "",
            senha: ""
        }
    }

    mudarEstadoNome = (event) =>{
        this.setState({nome: event.target.value})
    }

    mudarEstadoEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    mudarEstadoSenha = (event) =>{
        this.setState({senha: event.target.value})
    }

    efetuarLogin = (event)=> {
        event.PreventDefault();

        Axios.post("http://192.168.3.47/api/login", {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        })
            .then(data =>{
                if (data.status === 200) {
                    // console.log(data.data);
                    // console.log(data.data.token);
                    localStorage.setItem("usuario-opflix", data.data.token);
                    this.props.history.push('/home');
                }else{
                    console.log("Erroooooou!")
                }
            })
            .catch(erro => {
                this.setState({erro: "Usuario ou senha inválido"});
                console.log(erro)
            })
    }

}
render() {
    return (
        <section className="container flex">
            <div className="img_login"></div>
            <div className="img_overplay"></div>
        <div className="item_login">
                <div className="row">
                    <div className="item">
                       
                    </div>
                    <div className="item" id="item_title">
                        <p className="text__login" id="item__description">
                            Logue para acessar sua conta
                    </p>
                    </div>
                    <form onSubmit={this.efetuarLogin}>
                        <div className="item">
                            <input
                                className="input__login"
                                placeholder="username"
                                type="text"
                                name="username"
                                id="login__email"                                
                                onChange={this.mudarEstadoEmail}
                                value={this.state.email}
                            />
                        </div>
                        <div className="item">
                            <input
                                className="input__login"
                                placeholder="password"
                                type="password"
                                name="password"
                                id="login__password"
                                onChange={this.mudarEstadoSenha}
                                value={this.state.senha}
                            />
                        </div>
                        <div className="item">
                            <button className="btn btn__login" id="btn__login">
                                Login
                            </button>
                        </div>
                        <p
                            className="text__login"
                            style={{color: "red", textAlign:"center"}}
                            >
                                {this.state.erro}
                            </p>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login;