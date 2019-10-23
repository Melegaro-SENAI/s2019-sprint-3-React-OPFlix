import React, { Component } from "react";
import Axios from "axios";

export default class Cadastro extends Component {

    constructor() {
        super();
        this.state = {
            nome: "",
            email: "",
            senha: "",
            erro: ""
        }
    }

    cadastrarEstadoNome = (event) =>{
        this.setState({nome: event.target.value})
    }
    
    cadastrarEstadoEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    cadastrarEstadoSenha = (event) =>{
        this.setState({senha: event.target.value})
    }

    efetuarCadastro = (event) =>{
        event.preventDefault();
    }

    render(){
        return(
            <section className="container flex">
                <div className="img_login"></div>
                <div className="img_overplay"></div>

                <div className="body">
                    <div className="row">
                        <div className="body">

                        </div>
                        <div className="titulo__login" id="titulo">
                        </div>
                        <form onSubmit={this.efetuarLogin}>
                            <div className="box">
                            <h1>Login</h1>
                                <input
                                    className="input__login"
                                    placeholder="username"
                                    type="text"
                                    name="nome"
                                    id="login__nome"
                                    onChange={this.cadastrarEstadoNome}
                                />    
                                <input
                                    className="input__login"
                                    placeholder="email"
                                    type="text"
                                    name="email"
                                    id="login__email"
                                    onChange={this.cadastrarEstadoEmail}
                                    value={this.state.email}
                                    />
                                <input
                                    className="input__login"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    id="login__password"
                                    onChange={this.cadastrarEstadoSenha}
                                    value={this.state.senha}
                                    />
                                <input
                                    className="input__login"
                                    type="submit"
                                    name=""
                                    value="Login">
                                </input>
                        </div>
                            <p
                                className="text__login"
                                style={{ color: "red", textAlign: "center" }}
                                >
                                {this.state.erro}
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}