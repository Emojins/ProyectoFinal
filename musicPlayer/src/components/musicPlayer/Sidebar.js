/** @jsx jsx */
import React, { useState, useRef, useContext } from 'react'
import { css, jsx } from '@emotion/core'
import { StoreContext } from './index'
import Modal from './Modal'
import Toast from './Toast'
import logo from '../../../dist/forward.png'

const Sidebar = () => {
  const [sidebarState, setState] = useState({
    modal: false,
    toast: ''
  })

  const { state, dispatch } = useContext(StoreContext)

  const playlistRef = useRef(null)
  const playlists = Object.keys(state.playlists)
  const Subir= () => {


    const opciones={
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }
    const handleInput=({target})=>{
      setState({...state,
         [target.name]:target.value
        });
      console.log(target.value);
    }
    const handleSubmit=({target})=>{  
      
      (async ()=>{
      const respuesta = await fetch('http://localhost:3003/tracks/', opciones)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      if (respuesta.ok){
          return alert('Subido')
      }
      })()
      
    }
      return (
        <div>
          <input>musica</input>
        </div>
      )
    }

  const addPlaylist = e => {
    e.preventDefault()
    const list = playlistRef.current.value
    
    dispatch({ type: 'ADD_PLAYLIST', playlist: list })
    
    setState({
      ...sidebarState,
      modal: false,
      toast: 'Playlist was created successfully!'
    })
  }

  const handleModal = () =>
    setState({ ...sidebarState, modal: !sidebarState.modal })
    
    return (
      <ul className="Sidebar" css={CSS}>
        <a href="http://localhost:3000/home"><img src={logo}/></a>
     

      <li className="library">Pobeat</li>
      <li><a href="http://localhost:3001">Chat Global</a></li>
      <li><a href="#">Subir Música</a></li>
       <form>
        <input onChange={Subir} type="file" id="buscarMusica" className= "form-control"></input>
        <button onclick={Subir}>Subir</button>
       </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <li className="library">Library</li>


      {playlists.map(list => (
        <li
          key={list}
          className={list === state.currentPlaylist ? 'active' : ''}
          onClick={() => dispatch({ type: 'SET_PLAYLIST', playlist: list })}
        > 
          {list}
          
        </li>
       
      ))}
     

      <li className="new-playlist" onClick={handleModal}>
        <i className="fa fa-plus-circle" />
        <span>New Playlist</span>
      </li>

      <Modal show={sidebarState.modal} close={handleModal}>
        <form onSubmit={addPlaylist}>
          <div className="title">New Playlist</div>

          <div className="content-wrap">
            <input
              type="text"
              placeholder="My Playlist"
              ref={playlistRef}
              required
            />

            <br />

            <button type="submit">Create</button>
          </div>
        </form>
      </Modal>

      <Toast
        toast={sidebarState.toast}
        close={() => setState({ ...sidebarState, toast: '' })}
      />
    </ul>
  )
}

const CSS = css`
  width: 200px;
  height: 100%;
  background: #000000;
  padding-top: 20px;

  img {
    height: 60px;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    padding-left: 20px;
    text-transform: capitalize;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: bold;
  }

  li.active {
    border-left: 2px solid white;
    padding-left: 18px;
  }

  li.library {
    cursor: unset;
    color: #999;
    text-transform: uppercase;
    font-weight: normal;
  }

  li.new-playlist {
    position: absolute;
    bottom: 80px;

    i {
      margin-right: 5px;
      transform: translateY(1px);

      &:before {
        font-size: 20px;
      }
    }

    span {
      color: #999;
      font-weight: 300;
    }
  }

  form {
    button {
      background-color: #2bcc6c;
      color: white;
      padding: 12.5px 30px;
      border-radius: 25px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 13px;
      border: none;
      cursor: pointer;
    }

    .title {
      margin: 0;
      margin-bottom: 35px;
    }

    input {
      margin-bottom: 20px;
      height: 35px;
      padding-left: 8px;
      font-size: 16px;
      width: 100%;
      color: black;
    }

    .content-wrap {
      margin: 0px auto;
      max-width: 250px;
      text-align: center;
    }
  }
`


export default Sidebar
