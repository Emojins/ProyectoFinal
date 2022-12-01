import React,{useState} from 'react'

const Subir= () => {


const opciones={
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};

const [registro,setRegistro]=useState({
    username:"",
    email:"",
    password:"" ,
    confirmpassw:"" ,
    role:"",

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
    const respuesta = await fetch('http://localhost:3003/tracks/', opciones)
    console.log('pase el fecth')
    if (!respuesta.ok){
        return alert('Revise las credenciales yss')
    }
    })()
    
    }

    return (
      <div className="Auth-form-container">
        <form>
        <input type="file" id="buscarMusica"></input>
        <button onclick={handleSubmit} id="subirMusica"><input type="submit"></input></button>
        </form>
      </div>
    )
  }
  
  export default Subir