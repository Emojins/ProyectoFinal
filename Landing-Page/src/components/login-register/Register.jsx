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
    password:"" ,
    confirmpassw:"" ,
    role:"",

});

const [error, setError] = useState('');

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
    if (!respuesta.ok){
        alert('Revise las credenciales yss')}
    console.log('Registrado!')
    window.location = '/login'
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
                      <label>Seleccione su rol</label> <br />
                        <select onChange={handleInput} name="role" id="tipoUser" className="form-control mt-1" placeholder='Opciones'>
                            {/* <option value="" disabled></option> */}
                            <option value="usuario">Usuario</option>
                            <option value="artista">Artista</option>
                            <option value="productor">Productor</option>
                        </select>
                      </div>

                      <div>
                          <label>Seleccione su Provincia</label>

                            <select onChange={handleInput} name="provincia" id="provincia" className="form-control mt-1" placeholder='Opciones'>
                                {/* <option value="" disabled></option> */}
                                <option value="Buenos Aires">Buenos Aires</option>
                                <option value="Catamarca">Catamarca</option>
                                <option value="Chaco">Chaco</option>
                                <option value="Chubut">Chubut</option>
                                <option value="Córdoba">Córdoba</option>
                                <option value="Corrientes">Corrientes</option>
                                <option value="Entre Ríos">Entre Ríos</option>
                                <option value="Formosa">Formosa</option>
                                <option value="Jujuy">Jujuy</option>
                                <option value="La Pampa">La Pampa</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Mendoza">Mendoza</option>
                                <option value="Misiones">Misiones</option>
                                <option value="Neuquén">Neuquén</option>
                                <option value="Santa Fe">Santa Fe</option>
                                <option value="Santiago del Estero">Santiago del Estero</option>
                                <option value="Tierra del Fuego">Tierra del Fuego</option>
                                <option value="Tucumán">Tucumán</option>
                                <option value ="Salta">Salta</option>
                                <option value ="San Juan">San Juan</option>
                                <option value ="San Luis">San Luis</option>
                                <option value ="Santa Cruz">Santa Cruz</option>
                                <option value= "La Pampa">La Pampa</option>
                                <option value= "Rio Negro">Rio Negro</option>
                            </select>

                      </div>
                      <div>
                        <label><input type="checkbox" name="terminos"/>He leido los terminos y condiciones</label>
                      </div>
  
                      <div className="d-grid gap-2 mt-3">
                          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                          Enviar
                          </button>
                
                        <div name="alerta" >
                            { error.length > 0 && error}
                        </div>


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