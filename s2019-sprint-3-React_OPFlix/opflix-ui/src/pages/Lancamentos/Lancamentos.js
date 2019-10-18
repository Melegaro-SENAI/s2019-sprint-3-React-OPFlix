import React,{Component} from "react";

//imagem
import it from '../../assets/img/5320567.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg';

class Lancamentos extends Component{
    render() {
        return(
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">

                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>

                <section class="lancamentosFilmes" >
                    <div>
                        <h1>Filmes</h1>
                        <h2>Comédia</h2>
                        <img src={it} />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, sunt in eveniet beatae fugit officiis? Pariatur aspernatur iure porro, iste eveniet recusandae quaerat maxime qui eos amet, est, nisi provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur, sint odio soluta voluptate culpa eaque. Aperiam sunt quisquam inventore sequi, ut tenetur consequatur provident, natus cum velit tempore doloremque.</p> 
                        <h2>Drama</h2>
                        <img src={it} />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, sunt in eveniet beatae fugit officiis? Pariatur aspernatur iure porro, iste eveniet recusandae quaerat maxime qui eos amet, est, nisi provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur, sint odio soluta voluptate culpa eaque. Aperiam sunt quisquam inventore sequi, ut tenetur consequatur provident, natus cum velit tempore doloremque.</p> 
                        <h2>Ficção científica</h2>
                        <img src={it} />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, sunt in eveniet beatae fugit officiis? Pariatur aspernatur iure porro, iste eveniet recusandae quaerat maxime qui eos amet, est, nisi provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur, sint odio soluta voluptate culpa eaque. Aperiam sunt quisquam inventore sequi, ut tenetur consequatur provident, natus cum velit tempore doloremque.</p> 
                        <h2>Ação</h2>
                        <img src={it} />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, sunt in eveniet beatae fugit officiis? Pariatur aspernatur iure porro, iste eveniet recusandae quaerat maxime qui eos amet, est, nisi provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur, sint odio soluta voluptate culpa eaque. Aperiam sunt quisquam inventore sequi, ut tenetur consequatur provident, natus cum velit tempore doloremque.</p> 
                        <h2>Terror</h2>
                        <img src={it} />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, sunt in eveniet beatae fugit officiis? Pariatur aspernatur iure porro, iste eveniet recusandae quaerat maxime qui eos amet, est, nisi provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur, sint odio soluta voluptate culpa eaque. Aperiam sunt quisquam inventore sequi, ut tenetur consequatur provident, natus cum velit tempore doloremque.</p> 
                    </div>
                </section>
            </div>
        )
    }
}

export default Lancamentos;