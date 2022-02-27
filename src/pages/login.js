import React, { Component } from 'react';
import '../css/login.css';
import axios from 'axios';
import md5 from 'md5';

const baseUrl = "http://localhost:3001/usuarios";

class login extends Component {

  state = { /*captura lo que el usuario esta ecribiendo en pantalla*/
    from:{
      username:'',
      password:''
    }
  }

  handleChange = async e => { /*metodo para guardar en el estado el valor de entrada deacuerdo al nombre*/
    await this.setState({
      from:{
        ...this.state.from,
        [e.target.name]: e.target.value
      }
    });
  }

  iniciarSesion = async() =>{
    
    await axios.get(baseUrl, {params: {username: this.state.from.username,password: md5(this.state.from.password)}})
    .then(response =>{
      
      console.log(response.data[0].nombre);
      return response.data;
    })
    
    .then(response => {
      
      if (response.length > 0){

       console.log(response);
        
       alert(`Bienvenido ${response[0].nombre.toUpperCase()} ${response[0].apellido.toUpperCase()}`);
       window.location.href="./Principal";

      }
      else{
        alert('La información suministrada no es valida');
      }
    })
    .catch(console.error())
  }

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">

            <label>Usuario: </label>
            <br />
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.handleChange}
            />

            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
  }
}

export default login;