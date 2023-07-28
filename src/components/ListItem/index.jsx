import { useState } from "react"


function ListItem(props) {

  const [finalizado, setfinalizado] = useState(props.finalizado)

  return (
    <div>
      <span>{finalizado.toString()}</span>
      <input type="checkbox" checked={finalizado} />
      <h3>{props.textoTarefa}</h3>
      <button onClick={() => setfinalizado(!finalizado)}>Finalizar</button>
    </div>
  )
  }


export default ListItem