import React, {Component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';

//componets
import Navbar from './components/navbar';
import Portal from './components/portar';
import Videos from './components/videos';
import Videosp from './components/videospage';
import Donaciones from './components/donaciones';
import './sass/style.scss';





function Prueba () {
return (
( 
  <div className="principalpage"> 
       <Navbar/>
       <Divider id="hr"/>
       <Portal/>
       <Divider id="hr"/>
       <Videos/>
       <Divider id="hr"/>
       <Videosp />
       <Divider id="hr"/>
       <Donaciones />



  </div>

    )
  
)
}


render(
  <Prueba />
  ,document.getElementById('App')
);

