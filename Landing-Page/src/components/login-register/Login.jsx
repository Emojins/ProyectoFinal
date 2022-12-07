import React, {useState } from 'react'

const IniciarSesion = () => {
  const opciones={
    method:'POST',
    headers:{
    'Content-Type': 'application/json'
    }
  }
    const [registro,setRegistro]=useState({
        username:"",
        password:"" 
      })

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
        const respuesta = await fetch('http://localhost:4002/login', opciones)
        console.log('pase el fetch')
        if (!respuesta.ok) {
          alert('Revise las credenciales y vuelva a intentarlo')
          return
        }
        alert('Logueado!')
        setTimeout(function(){
          window.location = '/home'
      }, 3000);
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

              <div id='rr'></div>
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