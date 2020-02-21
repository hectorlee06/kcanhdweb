import React, {Component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//componets
import Home from './components/home';
import './sass/style.scss';





function Prueba () {
return (
( 
  <div className="principalpage"> 
       <Home/>

  </div>

    )
 
   
)

}


render(
  <Prueba />
  ,document.getElementById('App')
);

