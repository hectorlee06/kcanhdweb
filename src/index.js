import React, {Component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Divider from '@material-ui/core/Divider';

//componets
import Navbar from './components/navbar';
import Portal from './components/portar';
import Videos from './components/videos';
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

  </div>

    )
 
   
)

}


render(
  <Prueba />
  ,document.getElementById('App')
);

