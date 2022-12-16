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
      <img src={require('./img/logo.jpg')} />

    
      <a href="#" className="btn">Inicio</a>
      <a href="#" className="btn">Sobre</a>
      <a href="#" className="btn">Contato</a>
      </nav>  
      <div className="caixa">
     
      <img src={require('./img/logo.jpg')} />
        <div className='p-1'>
        
          <h1>Emprende Tech</h1>
          
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
        <h1>Nosso Equipe</h1>
  

        <div className="produto">
      <img src={require('./img/user1.jpeg')} />
   
         <h1>Everth Franco</h1>
         <p>Administrador</p>
        <a href="#" className="btn">Facebook</a>
        <a href="#" className="btn">Instagram</a>
        </div>

        <div className="produto">
      <img src={require('./img/user3.jpeg')} />
   
         <h1>Venel Dorzier</h1>
         <p>Gerente de Marketing</p>
        <a href="#" className="btn">Facebook</a>
        <a href="#" className="btn">Instagram</a>
        </div>

        <div className="produto">
      <img src={require('./img/user2.jpeg')} />
   
         <h1>Adama Dieng</h1>
         <p>Asessor de personal</p>
        <a href="#" className="btn">Facebook</a>
        <a href="#" className="btn">Instagram</a>
        </div>
        <div className="produto">
      <img src={require('./img/user4.jpeg')} />
   
         <h1>Yulennys Jimenez</h1>
         <p>Colaboradora na area emprendorismo</p>
        <a href="#" className="btn">Facebook</a>
        <a href="#" className="btn">Instagram</a>
        </div>
        </div>

      



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
  <p >Turma 21 Grupo #3</p>
 </footer>
    </div>
  );

}

export default App;
