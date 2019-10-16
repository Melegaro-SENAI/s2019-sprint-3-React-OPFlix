import React,{Component} from "react";

import amazon from '../../assets/img/amazon_PNG5.png';
import netflix from '../../assets/img/novo-icone-identidade-visual-logo-netflix-blog-gkpb-696x364.jpg';
import googleplayfilmes from '../../assets/img/download.png';
import vizer from '../../assets/img/viozer.png';
import youtube from '../../assets/img/youtube.png';


import Rodape from '../../components/Rodape';

class Plataformas extends Component{
    
    constructor(){
        super();
        this.state = {
            lista: [
                // idCategoria: 1, nome: 'Ação',
                // idCategoria: 1, nome: 'Aventura',
                // idCategoria: 1, nome: 'Cinema de arte',
                // idCategoria: 1, nome: 'Chanchada',
                // idCategoria: 1, nome: 'Cinema Catástrofe',
                // idCategoria: 1, nome: 'Comédia',
                // idCategoria: 1, nome: 'Comédia romântica',
                // idCategoria: 1, nome: 'Comedia dramática',
                // idCategoria: 1, nome: 'Dança',
                // idCategoria: 1, nome: 'Documentário',
                // idCategoria: 1, nome: 'Docuficção',
                // idCategoria: 1, nome: 'Drama',
                // idCategoria: 1, nome: 'Espionagem',
                // idCategoria: 1, nome: 'Faroeste',
                // idCategoria: 1, nome: 'Fantasia científica',
                // idCategoria: 1, nome: 'Ficção científica',
                // idCategoria: 1, nome: 'Filmes de guerra',
                // idCategoria: 1, nome: 'Filme policial',
                // idCategoria: 1, nome: 'Romance',
                // idCategoria: 1, nome: 'Seriado',
                // idCategoria: 1, nome: 'Suspense',
                // idCategoria: 1, nome: 'Terror',
            ],
            nome: ""
        }
    }

    componentDidMount(){
        this.listarPlataforma();
    }

    listarPlataforma = () =>{
        fetch('http://192.168.3.47:5000/api/plataformas')
            .then(response => response.json())
            .then(data => this.setState({lista: data}));
    }

    cadastrarPlataforma = (event) =>{
        event.preventDefault();

        fetch('http://192.168.3.47:5000/api/plataformas',{
            method: "POST",
            body: JSON.stringify({ nome: this.state.nome }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => this.listarPlataforma())
            .catch(erro => console.log(erro));
    }

    nomePlataforma = (event) =>{
        this.setState({nome: event.target.value});
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <header className="conteudoPrincipal">
                    <div className="container">

                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro"></section>
                    <h1 className="conteudoPrincipal-cadastro-titulo">Plataformas</h1>
                    <div className="container" id="conteudoPrincipal-plataformas"></div>
                        <img src={amazon} />
                        <img src={netflix} />                
                        <img src={googleplayfilmes} />                
                        <img src={vizer} />                
                        <img src={youtube} />                                
                </main>
            </div>
        )
    }
}

export default Plataformas;