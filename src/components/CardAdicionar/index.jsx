import { useState } from "react";

function CardAdicionar(props) {
  
  const [textoTarefa, setTextoTarefa] = useState("")
  
  const handleAdicionarTarefa = () => {
    props.adicionarTarefa(textoTarefa)
    setTextoTarefa("")
  }
  
  
  return (
    <div>
      <h1>Texto da tarefa: {textoTarefa}</h1>
      <input type="text" 
      value={textoTarefa} 
      onChange={(evento) => setTextoTarefa(evento.target.value)} 
      placeholder="Adicione uma tarefa" 
      />
      <button onClick={() => handleAdicionarTarefa()}>Adicionar</button>
    </div>
  )
}

export default CardAdicionar;