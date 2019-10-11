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
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default Login;