import React, {Component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Divider from '@material-ui/core/Divider';

//componets

i//mport './sass/style.scss';





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

