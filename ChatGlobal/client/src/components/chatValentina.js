
//npm i socket.io-client (versión para react)
import io from 'socket.io-client'
import {useState, useEffect} from 'react'
import axios from 'axios'
//Conexión para escuchar y enviar eventos
const socket = io('http://localhost:4000')


const ChatValentina = () => {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [select] = useState("");
  const [storedMessages, setStoredMessages] = useState([])
  const [firstTime, setfirstTime] = useState(false)

  const url = "http://localhost:4000/api/"

  useEffect(() =>{
    const receivedMessage = (message) =>{
      //console.log(message)
      setMessages([message, ...messages])
    
    }
    socket.on('message', receivedMessage)

    //Desuscribimos el estado del componente cuando ya no es necesario utilizarlo
    return () => {
      socket.off('message', receivedMessage)
    }
    

  }, [messages])

  //Cargamos los mensajes guardados en la BD la primera vez
  if(!firstTime){
    axios.get(url + "messages").then(res => {
      setStoredMessages(res.data.messages);
    })
    setfirstTime(true)
  }
  

  const handlerSubmit = (e) => {
    //Evitamos recargar la página
    e.preventDefault()

      //Nuestro mensaje
      const newMessage = {
        body: message,
        from: 'Yo',
      }
      //Añadimos el mensaje y el resto de mensajes enviados
      setMessages([newMessage, ...messages])
      //Limpiamos el mensaje
      setMessage('')

      //Petición http por POST para guardar el artículo:
      axios.post(url + 'save', {
        message: message,
        from: `(${select})`,
      })
    }
  return (
    <>
    <div className="App">
      <div className="container mt-3">

              <div className="card shadow border-0">
              <div className="card-body">
                <h5 className="text-center mb-3">CHAT VALENTINA</h5>

                {/* chat form */}

                <form onSubmit={handlerSubmit}>
                  <div className="d-flex">
                    <input type="text" className="form-control" placeholder="Escribe un mensaje..." onChange={e => setMessage(e.target.value)} value={message}/>
                    <button className="btn btn-dark mx-3" type="submit">Enviar</button>
                  </div>
                </form> 
              </div>
            </div>

            {/* chat messages */}

            <div className="card mt-4 mb-4 shadow border-0" id="content-chat">
              <div className="card-body">

                {messages.map((message, index) => (
                  <div key={index} className={`d-flex p-3 ${message.from === "Yo" ? "justify-content-end" : "justify-content-start"}`}>
                    <div className={`card mb-2 shadow border-1 ${message.from === "Yo" ? "bg-success bg-opacity-25" : "bg-light"}`}>
                      <div className="card-body">
                        <small className="">{message.from}: {message.body}</small>
                      </div>
                    </div>
                  </div>
                ))}

                {/* chat stored messages */}
                <small className="text-center text-muted">... Mensajes guardados para Valentina...</small>
                {storedMessages.map((message, index) => (
                  <div key={index} className={`d-flex p-3 "justify-content-end" : "justify-content-start"}`}>
                    <div className={`card mb-6 shadow border-1"bg-success bg-opacity-25" : "bg-light"}`}>
                      <div className="card-body">
                        <small className="text-muted">{message.message}</small>
                      </div>
                    </div>
                  </div>

                ))}

              </div>
            </div>
      </div>
    </div>
</>
  ) 
}

export default ChatValentina
