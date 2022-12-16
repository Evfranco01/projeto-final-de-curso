import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lista from './Lista';
import Criar from './Criar';
import Detalhes from './Detalhes';
import Editar from './Editar';

function App() {
  return (
    <div className="App">
      <nav className='menu'>
      <img src={require('./img/avatar.png')} />

      <h1> instituto social para o imigrante </h1>
      <a href="#" className="btn">Inicio</a>
      <a href="#" className="btn">Sobre</a>
      <a href="#" className="btn">Contato</a>
      </nav>  
      
      <div className="base">
     
      <img src={require('./img/logo.png')} />
        <div className='dr'>
        
          <h1>instituto social para o imigrante</h1>
          
          <p>
          é uma entidade sem fins lucrativos e foi criada por um grupo de quatro colegas, com a finalidade de ajudar a pessoas imigrantes, em situação de vulnerabilidade social.
 O objetivo é promover o fortalecimento com instituições que possam ajudar, para a superação pessoal incorporação do mundo da tecnologia e a programação.  
Capacitação profissional: o que é e qual é a sua importância
Capacitação profissional é o conjunto de iniciativas (cursos, treinamentos) que ajudam os imigrantes a desenvolverem suas habilidades profissionais. Essa capacitação pode focar em competências técnicas ou comportamentais.
Cada vez mais será necessário ter utilidade comprovada e uma renovação contínua de conhecimento para se manter ativo no mercado de avanço tecnológico escalável.
Nesse cenário, investir em capacitação profissional é um dos principais caminhos para assegurar a qualidade da equipe e alcançar o sucesso. Entenda melhor sobre a importância de capacitar seus funcionários e como você pode fazer isso, acompanhando a leitura a seguir.
      </p>
        </div>
       </div>
   
    <div className='bloque'>  
        <h1 className='titulo'>Catalogo de Cursos</h1>
   <div className="produto">
      <img src={require('./img/logo.png')} />
   
         <h1>curso de Tecnologia</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        <div className="produto">
      <img src={require('./img/logo.png')} />
   
         <h1>curso de Tecnologia</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        <div className="produto">
      <img src={require('./img/logo.png')} />
   
         <h1>curso de Tecnologia</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        <div className="produto">
      <img src={require('./img/logo.png')} />
   
         <h1>curso de Tecnologia</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        </div>

        <div className='bloque'>  
        <h1 className='titulo'>Catalogo de Cursos</h1>
   <div className="produto">
      <img src={require('./img/logo.png')} />
   
         <h1>curso de Tecnologia</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        <div className="produto">
      <img src={require('./img/logo.png')} />
   
         <h1>curso de Tecnologia</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>
        
        <div className="produto">
      <img src={require('./img/logo.png')} />
   
         <h1>curso de Tecnologia</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        <div className="produto">
      <img src={require('./img/logo.png')} />
   
         <h1>curso de Tecnologia</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        </div><br></br>



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lista />}></Route>
          <Route path='/cadastro/Criar' element={<Criar />}></Route>
          <Route path='/cadastro/Detalhes/:empid' element={<Detalhes />}></Route>
          <Route path='/cadastro/Editar/:empid' element={<Editar />}></Route>
        </Routes>
      </BrowserRouter>
      
    
      
   <footer class="footer">
    
  <p >Copyright (c) 2022  All rights reserved</p>
  <p >Ydalia Jimenez</p>
 </footer>
    </div>
  );

}

export default App;
