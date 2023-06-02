import React from "react";
import "./App.css"
import Cadastro from "./Componentes/cadastro";
import Listagem from "./Componentes/Listagem.js"
import'react-toastify/dist/ReactToastify.css';
import{ToastContainer}from"react-toastify";
function App() {

  
   

  // Como funciona objeto em javascript
  const usuario = {
    //chave: valor
    nome:"Jose",
    idade: 19,
    status:true,
    endereco: {
      rua: "Londres",
      numero: 139,
      complemento:"ap 20"
    },
    vacinas_covid19:["Pfizer", "Pfizer", "Pfize", "J&J"]
  }

  const qnt_vacina = usuario.vacinas_covid19.length - 1

  const usuarios_padrao = [
    
      {nome: "Jose", status: true, email: "jose.roberto@gmail.com",},
      {nome: "CanoaFurada", status: false, email: "Cnoafurada.furada@gmail.com",},
      {nome: "Lopez", status: true, email: "Lopez.lopez@gmail.com",},
      {nome: "Kelvin", status: true, email: "Kelvin.dragons@gmail.com"}

    
  ]

  const [usuarios, alteraUsuarios] = React.useState(usuarios_padrao);

  
  return (
    <div className="container">

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauserOnHover
        theme="dark"
        />

      <div className="d-flex justify-content-around">
        
        
        <Listagem usuarios={usuarios}/>
        <Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios} />

        

      </div >
      
    </div>
  );
}



export default App;
