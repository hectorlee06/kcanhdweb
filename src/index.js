import React, {Component} from 'react';
import {render} from 'react-dom';


//componets
import Home from './components/home';

class Prueba extends Component {
 render() {

   return (
     <Home />
   )

  }
}

render(
  <Prueba />
  ,document.getElementById('App')
);
