import React from 'react'

const IniciarSesion = () => {
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
              <label>Correo electronico</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Introduce tu correo"
              />
            </div>
            <div>
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Introduce tu contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
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