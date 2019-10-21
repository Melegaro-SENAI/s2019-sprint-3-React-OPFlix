import React, { Component } from "react";

import Axios from 'axios';

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
    
        Axios.post("http://192.168.3.47:5000", {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        })  
    }
}