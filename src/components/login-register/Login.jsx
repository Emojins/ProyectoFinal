import React, { useContext,useState } from 'react'
import { AuthContext } from '../../context/AuthContext'


const IniciarSesion = () => {

  // const login = useContext(AuthContext)


  const opciones={
    method:'POST',
    headers:{
    'Content-Type': 'application/json'
    }
    
    }
    const [registro,setRegistro]=useState({
        username:"",
        password:"" 
    
    });
    
    const handleInput=({target})=>{
    setRegistro({
    ...registro,
    [target.name]:target.value
    
    
    })
    console.log(target.value)
    
    
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        
        (async ()=>{
        
        
        opciones.body=JSON.stringify(registro)
        console.log('llegue aca')
        console.log('Registro: ', registro)
        console.log(opciones)
        const respuesta = await fetch('http://localhost:4000/usuario', opciones)
        console.log('pase el fecth')
        if (!respuesta.ok)alert('Revise las credenciales y vuelva a intentarlo')
        console.log('todavia no mori')
        const data= await respuesta.json()
        //console.log(data)
        
        
        })()
        
                
        }

  return (
    <div className="Auth-form-container">

        <form className="Auth-form">

          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar Sesion</h3>
            <div className="text-center">
              No estas registrado?{" "}
              <span className="link-primary">
                <a href="/register">Registrate</a>
               
              </span>
            </div>
            <div>
              <label>Usuario</label>
              <input
                type="text" name='username' onChange={handleInput}
                className="form-control mt-1"
                placeholder="Introduce tu correo"
              />
            </div>
            <div>
              <label>Contraseña</label>
              <input
                type="password" name="password" onChange={handleInput}
                className="form-control mt-1"
                placeholder="Introduce tu contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary"  onClick={handleSubmit}>
                Enviar
              </button>
            </div>
            <p className="text-center mt-2">
            <a href="#">Olvidaste tu contraseña?</a>
            </p>
          </div>

        </form>

      </div>
  )
}

export default IniciarSesion