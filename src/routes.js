import React from 'react';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';


import Crud from './pages/grid';


export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>                           

                             
                
                <Route path="/" exact component={Crud} />
               

            </Switch>
        </BrowserRouter>
    )
}