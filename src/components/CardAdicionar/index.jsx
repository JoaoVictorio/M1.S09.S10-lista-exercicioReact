import { useState } from "react";

function CardAdicionar() {
  
  const [textoTarefa, setTextoTarefa] = useState("")
  
  return (
    <div>
      <h1>Texto da tarefa: {textoTarefa}</h1>
      <input type="text" 
      value={textoTarefa} 
      onChange={(evento) => setTextoTarefa(evento.target.value)} 
      placeholder="Adicione uma tarefa" />
      <button onClick={() => {}}>Adicionar</button>
    </div>
  )
}

export default CardAdicionar;