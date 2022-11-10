import React,{useState} from 'react'

const Auth = () => {


const opciones={
method:'POST',
headers:{
'Content-Type': 'application/json'
}

}
const [registro,setRegistro]=useState({
    username:"",
    email:"",
    role:"",
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
                  <h3 className="Auth-form-title">Registrarse</h3>
  
                      <div>
                          <label>Nombre de Usuario</label>
                          <input
                          type="text" name='username' onChange={handleInput}
                          className="form-control mt-1"
                          placeholder="ej: Usuario12"
                          />
                      </div>
  
                      <div>
                          <label>Correo Electronico</label>
                          <input
                          type="email" name='email' onChange={handleInput}
                          className="form-control mt-1"
                          placeholder="ejemplo@hotmail.com"
                          />
                      </div>
  
                      <div>
                          <label>Contraseña</label>
                          <input
                          type="password" name='password' onChange={handleInput}
                          className="form-control mt-1"
                          placeholder="1234"
                          />
                      </div>
  
                      <div>
                          <label>Repetir Contraseña</label>
                          <input
                          type="password" name='veriPass' onChange={handleInput}
                          className="form-control mt-1"
                          placeholder="1234"
                          />
                      </div>
                      <div>
                      <label>Seleccione su rol</label> <br />
                        <select onChange={handleInput} name="role" id="tipoUser" className="form-control mt-1" placeholder='Opciones'>
                            {/* <option value="" disabled></option> */}
                            <option value="usuario">Usuario</option>
                            <option value="artista">Artista</option>
                            <option value="productor">Productor</option>
                        </select>
                      </div>
  
                      <div className="d-grid gap-2 mt-3">
                          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                          Enviar
                          </button>
                      </div>
                      <div className="text-center">
                          Ya estas registrado?{" "}
                          <span className="link-primary"><a href="/login">Iniciar Sesion</a></span>
                      </div>
  
              </div>
          </form>
  
      </div>
    )
  }
  
  export default Auth