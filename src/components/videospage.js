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
        <h1 className="videos--h1"> Mas Videos</h1>
        <Divider id="hr"/>
        </div>
        <div className="videobody">
          <Carditem   href={{
            imagen: 'https://img.youtube.com/vi/J2EXn8mmLGc/maxresdefault.jpg',
            titulo: 'https://youtu.be/J2EXn8mmLGc',
            titu : 'Los DJ de Yuma - KCanHD',
            fecha : '19 sept. 2017',
            descri :'Este video se comenta el mal servicios de los DJ´s de Yuma y su mala musica.'

          }}/>

          <Carditem   href={{
            imagen: 'https://img.youtube.com/vi/dxvudgZNehU/maxresdefault.jpg',
            titulo: 'https://youtu.be/dxvudgZNehU',
            titu : 'La Sensibilidad de HLee Medina - KCanHD',
            fecha : '16 sept. 2017',
            descri :'Este video se comenta el mal servicios de los DJ´s de Yuma y su mala musica.'
          }}/>

          <Carditem   href={{
            imagen: 'https://img.youtube.com/vi/7pTSiOAoLZ8/maxresdefault.jpg',
            titulo: 'https://youtu.be/7pTSiOAoLZ8',
            titu : 'LOS CUERNOS / La Boda Del Pueblo - KcanHD',
            fecha : '15 sept. 2017',
            descri :'Este video se comenta el mal servicios de los DJ´s de Yuma y su mala musica.'
          }}/>

        </div>
        <div className="videobody">
          <Carditem   href={{
            imagen: 'https://img.youtube.com/vi/z0Lr2SNxWV8/maxresdefault.jpg',
            titulo: 'https://youtu.be/z0Lr2SNxWV8',
            titu : 'Yaneufry y Su Vida Personal - KcanHD',
            fecha : '15 sept. 2017',
            descri :'Este video se comenta el mal servicios de los DJ´s de Yuma y su mala musica.'
          }}/>

          <Carditem   href={{
            imagen: 'https://img.youtube.com/vi/6ptQ5MRosMA/maxresdefault.jpg',
            titulo: 'https://youtu.be/6ptQ5MRosMA',
            titu : 'Un Desliz - KcanHD',
            fecha : '15 sept. 2017',
            descri :'Este video se comenta el mal servicios de los DJ´s de Yuma y su mala musica.'
          }}/>

          <Carditem   href={{
            imagen: 'https://img.youtube.com/vi/abQYwXHwp4A/maxresdefault.jpg',
            titulo: 'https://youtu.be/abQYwXHwp4A',
            titu : 'Cosas de Hoy - KCanHD',
            fecha : '14 sept. 2017',
            descri :'Este video se comenta el mal servicios de los DJ´s de Yuma y su mala musica.'
          }}/>

        </div>
     </div>
    )
 
   }
 }
 
 
 export default Videos;