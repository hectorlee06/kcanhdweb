import React, {Component} from 'react';
import {render} from 'react-dom';


class Prueba extends Component {
 render() {

   return (
     <h1> Aqui va la pagina de KCan HD </h1>
   )

  }
}

render(
  <Prueba />
  ,document.getElementById('App')
);
