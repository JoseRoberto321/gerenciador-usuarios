import React from "react";
import "./App.css"
import Cadastro from "./Componentes/cadastro";
import Listagem from "./Componentes/Listagem.js"
import'react-toastify/dist/ReactToastify.css';
import{ToastContainer}from"react-toastify";
import supabase from './supabase';

function App() {

  
   
  const [usuarios, alteraUsuarios] = React.useState( []);

  function buscarTodos(){
      supabase.from("usuarios").select()
      .then( Response => {
        console.log("Conexao bem sucedida!");
        console.log( Response.data );
        alteraUsuarios( Response.data);
      })
      .catch( Response => {
       console.log("Deu erro na conexao");
       console.log( Response )
      })
  }

  React.useEffect( ()=> {
    buscarTodos();
  },[])

  
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
        
        
        <Listagem usuarios={usuarios} alteraUsuarios={alteraUsuarios}/>
        <Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios} />

        

      </div >
      
    </div>
  );
}



export default App;
