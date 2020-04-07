import React, {Component} from 'react';
import {render} from 'react-dom';
import Divider from '@material-ui/core/Divider';

import Carditem from './carditem'


class Videos extends Component {
  render() {
 
    return (
     <div className="videos">
    
       
        <div className="portal">
        <a name="videos"></a>
        <h1 className="videos--h1"> Donaciones</h1>
        <Divider id="hr"/>
        </div>
        <div className="videobody">
           
           <h1 className="donaciones--h1">¡Gracias por ver nuestros videos y apoyarnos!</h1>
           
        </div>
        <div>
        <p>Siempre estamos tratando de hacer que nuestro publico tenga el mejor 
             entretenimiento que podamos brindarles, nuestros recursos son limitados 
             y necesitamos su apoyo. Si no puede sientase libre de compromiso.. Con 
             todo lo que tenemos actualmente siempre haremos nuestro mejor esfuerzo.</p>
        </div>
        <div>
          <h2>Seleccinoes la cantidad</h2>
          <hr></hr>
            <ul>
              <li><button>$5</button></li>
              <li><button>$10</button></li>
              <li><button>$15</button></li>
              <li><button>$20</button></li>
              <li><button>Otra</button></li>
            </ul>
        </div>
        <div>
          <h3>Tu donacion</h3>
          <input type="text" name="amountdonation" class="text_amountdonation" value="0.00"/>USD
                        <input type="radio" name="timesetdonation" value="Una vez" checked/>Una vez
                        <input type="radio" name="timesetdonation" value="Mensual" checked/>Mensual
          
       
        </div>
 
    </div>
    )
 
   }
 }
 
 
 export default Videos;