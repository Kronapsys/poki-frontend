import React from 'react';
import { Switch } from 'react-router';
import LogIn from '../containers/LogIn/LogIn';
import Register from '../containers/Register/Register';
import { PublicRoute } from './helperRoutes';

const PublicRoutes = () => {
    return(
        <Switch>
           <PublicRoute exact path='/login' component={LogIn}/> 
           <PublicRoute exact path='/register' component={Register}/> 
        </Switch>
    )
}

export default PublicRoutes;