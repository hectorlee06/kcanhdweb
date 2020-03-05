import React, {Component} from 'react';
import {render} from 'react-dom';


import Portada from '../img/Laughing_King.png';
class Portal extends Component {
  render() {
 
    return (
     <div className="portal">
         
         <h1 className="portal--h1">Muerete de la Risa</h1>
         <img  className="portal--img" src={Portada}/>
         <h2 className="portal--h2" >Muerete de la risa con estos tres locos con temas que vivos dia a dia</h2>
        
     </div>
    )
 
   }
 }
 
 
 export default Portal;