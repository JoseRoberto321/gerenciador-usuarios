

function App() {

  //como funciona objetos em JavaScript
  const usuario = {
    //chave
    nome: "James",
    idade: 12,
    status: true,
    endereco: {
       rua: "Rua X",
       numero: 139,
       complemento: "ap 20"
     },
     vacinas_covid19: ["pfizer", "pfizer", "pfizer", "J&J",]

  }

  const qnt_vacina = usuario.vacinas_covid19.length - 1

  //Como usar um array com objetos dentro
  const usuarios = [
   {nome: "Conrado", status: true },
   {nome: "Lores", status: false },
   {nome: "Maria", status: true },
   {nome: "Pedrita", status: true },
  ]

  console.log(usuarios)

  //console.log(usuario.nome.rua, usuario.endereco.complemento)
  //console.log(Object.keys(usuario))

  
  return (
    <div className="container">

      <div className="d-flex justify-content-around">

        <div style={estilo}>
          <h2> Listagem </h2>

          <p> Nome: {usuario.nome} </p>
          <p> Idade: {usuario.idade}   </p>
          <p> Rua: {usuario.endereco.rua} </p>
          <p> 1 vacina: {usuario.vacinas_covid19[0]} </p>
          <p> ultima vacina: {usuario.vacinas_covid19[ qnt_vacina]} </p>
        </div>

        <div style={estilo}>
          <h2> Cadastro </h2>
        </div>

      </div>

    </div>
  );
}

const estilo = {
  width: 600,
  border: "5px solid #000",
  padding: 20,
  margintop: 50 
 }

export default App;
