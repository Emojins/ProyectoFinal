import React from 'react'

const Auth = () => {
    return (
      <div className="Auth-form-container">
  
          <form className="Auth-form">
              
          <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Registrarse</h3>
  
                      <div>
                          <label>Nombre de Usuario</label> <br />
                          <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="ej: Usuario12"
                          />
                      </div>
  
                      <div>
                          <label>Correo Electronico</label> <br />
                          <input
                          type="email"
                          className="form-control mt-1"
                          placeholder="ejemplo@hotmail.com"
                          />
                      </div>
  
                      <div>
                          <label>Contraseña</label> <br />
                          <input
                          type="password"
                          className="form-control mt-1"
                          placeholder="1234"
                          />
                      </div>
  
                      <div>
                          <label>Repetir Contraseña</label> <br />
                          <input
                          type="password"
                          className="form-control mt-1"
                          placeholder="1234"
                          />
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