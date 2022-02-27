/* eslint-disable array-callback-return */
import '../css/App.css';
import React, {useEffect, useState,} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


const url ='https://jsonplaceholder.typicode.com/users';

function Principal() {
  // Declaración de una variables de estado que llamaremos 
  const [user, setUser] = useState([]); /*almacena los datos de fomar dinamirca*/
  const [userTable, setUserTable] = useState([]); /*almacena los datos de fomar estatica*/
  const [search, setsearch] = useState(""); /*almacena los datos de foma dinamirca*/

  const getRequest = async() => {
    await axios.get(url)

    .then(response =>{
      setUser(response.data);
      setUserTable(response.data);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  //funcion encargada de escuchar cuando el usuario precione una tecla en el buscador
  const handleChange = estado =>{
    setsearch(estado.target.value);
    console.log(`Busqueda: ${estado.target.value}`);
    filter(estado.target.value);
  }

  //Esta funcion se encarga de filtrarl los elelemento con respecto a la busqueda 
  const filter = ((searchTerm) => {
    let searchResult = userTable.filter((elemento) => {
      //la busqueda podra ser por nombre o nombre de usuario
      //toString() = todo lo que se ecriba en la busqueda va a entenderse como cadena de testo
      //toLowerCase() = vuelve todas la letras a minuscula
      //includes(searchTerm) = compueba si algun termino coniside con la bsqueda
      if(elemento.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
      || elemento.username.toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return elemento;
      }
    });
    setUser(searchResult);
  })

  useEffect(() => {
    getRequest();
  },[])

  return (
    <div className="App">
      
      <div className="containerInput">
        <input 
          className="form-control inputBuscar"
          value = {search}
          placeholder="buscador rapido"
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-success">
      <FontAwesomeIcon icon={faSearch} />
      </button>

      <div className=" table-responsive">
        <tablet className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Nombre de usuario</th>
              <th>Correo</th>
              <th>Sitio web</th>
              <th>Ciudad</th>
              <th>Empresa</th>
            </tr>
          </thead>
          
          <tbody>
            {user && user.map(usuario => (
              //por cada usuario se muestra una fila
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.phone}</td>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
                <td>{usuario.website}</td>
                <td>{usuario.address.city}</td>
                <td>{usuario.company.name}</td>
              </tr>
            ))}
          </tbody>

        </tablet>
      </div>
    </div>
  );
}

export default Principal;