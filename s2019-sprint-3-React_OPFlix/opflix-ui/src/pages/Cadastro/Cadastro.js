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

        Axios.post("")
    }

    render(){
        return(
            <section className="container flex">
                <div className="img__login"></div>
                <div className="img__overplay"></div>

                <div className="item__login">
                    <div className="row">
                        <div className="item">

                        </div>
                        <div className="item" id="item__title">
                            <p className="text__login" id="item__description">
                                Cadastre-se para fazer login em sua conta.
                            </p>
                        </div>
                        <form onSubmit={this.efetuarCadastro}>
                            <div className="item">
                            <input
                                className="item__login"
                                placeholder="username"
                                type="text"
                                name="username"
                                id="login__nome"
                                onChange={this.cadastrarEstadoNome}
                                value={this.state.nome}
                            />
                        </div>
                        <div className="item">
                            <input
                                className="input__cadastro"
                                placeholder="email"
                                type="email"
                                name="email"
                                id="login__email"
                                onChange={this.cadastrarEstadoEmail}
                                value={this.state.email}
                            />
                        </div>
                        <div className="item">
                            <input
                                className="input__cadastro"
                                placeholder="senha"
                                type="text"
                                name="senha"
                                id="login__email"
                                onChange={this.cadastrarEstadoSenha}
                                value={this.state.senha}
                            />
                        </div>
                        <div className="item">
                            <button className="btn btn__login" id="btn__login">
                                Cadastrar
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}