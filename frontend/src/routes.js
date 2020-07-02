import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import CadastroOng from './Pages/CadastroOng';
import Profile from './Pages/Profile';
import NovoCaso from './Pages/NovoCaso';

export default function  Routes (){

    return (

        <BrowserRouter> 
        <Switch>
         <Route path='/' exact component= {Login}/>
         <Route path='/CadastroOng' component= {CadastroOng}/>
         <Route path ='/Profile' component={Profile}/>
         <Route path ='/Caso/Novo' component={NovoCaso}/>

        </Switch>
        </BrowserRouter>
    )
}    
