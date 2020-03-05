import React, {Component} from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import '../sass/style.scss';

import logo from '../img/logo.png';

class Navbar extends Component {
 render() {

   return (
    <div className="navbar">
        <div className="navbar--img">
        <img  
        className="navabar--logo"
        src={logo}/>
        </div>

        <div className="navbar-ul">
        <Typography id="typografy">
            <Link  id="navbar-ul_link" href="#" >
              Inicio
            </Link>
            <Link id="navbar-ul_link" href="#" >
              Videos
            </Link>
            <Link  id="navbar-ul_link" href="#" >
              Donaciones
            </Link>
            <Link id="navbar-ul_link" href="#" >
              Contactos
            </Link>
            <Link  id="navbar-ul_link" href="#" >
              Informacion
            </Link>
            
        </Typography>
          <Button href="https://www.youtube.com/kcanhd" id="buttonsub" variant="contained" color="primary">
            Suscribete!
          </Button>
        </div>
    </div>
   )

  }
}


export default Navbar;