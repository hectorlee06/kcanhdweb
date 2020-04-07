import React, {Component} from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import '../sass/style.scss';

//import {Link} from 'react-router'
import logo from '../img/logo.png';

import Videos from "./videospage";
class Navbar extends Component {

  rendirisando (){
    return Videos;
  }
 render() {

   return (
    <div className="navbar">
        <div className="navbar--img">
        <img  href="/"
        className="navabar--logo"
        src={logo}/>
        </div>

        <div className="navbar-ul">
        <Typography id="typografy">
            <Link  id="navbar-ul_link" href="/" >
              Inicio
            </Link>
            <Link to={Videos} id="navbar-ul_link" href="#videos" >
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