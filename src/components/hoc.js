import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header';
import  Home from './Home'

function hoc({children,path}) {
   
    

  return  function EnhancedComponent(props) {
    return (
        <Route path={path}>
        <Header/>
        {children}
        <Home/>
      </Route>
    );
   }()
}

export default hoc;