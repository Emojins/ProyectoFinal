import React from 'react'

const Auth = () => {
    return (
      <div className="Auth-form-container">
  
          <form className="Auth-form">
              
          <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Registrarse</h3>
  
                      <div>
                          <label>Nombre de Usuario</label>
                          <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="ej: Usuario12"
                          />
                      </div>
  
                      <div>
                          <label>Correo Electronico</label>
                          <input
                          type="email"
                          className="form-control mt-1"
                          placeholder="ejemplo@hotmail.com"
                          />
                      </div>
  
                      <div>
                          <label>Contraseña</label>
                          <input
                          type="password"
                          className="form-control mt-1"
                          placeholder="1234"
                          />
                      </div>
  
                      <div>
                          <label>Repetir Contraseña</label>
                          <input
                          type="password"
                          className="form-control mt-1"
                          placeholder="1234"
                          />
                      </div>
                      <div>
                      <label>Seleccione su rol</label> <br />
                        <select name="tipoUser" id="tipoUser" className="form-control mt-1" placeholder='Opciones'>
                            <option value="" disabled></option>
                            <option value="1">Usuario</option>
                            <option value="2">Artista</option>
                            <option value="3">Productor</option>
                        </select>
                      </div>
  
                      <div className="d-grid gap-2 mt-3">
                          <button type="submit" className="btn btn-primary">
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