import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import RegisterComponent from './RegisterComponent';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <Route exact path="/" component={RegisterComponent}></Route>
            </BrowserRouter>
        </div>
    )
}

export default Routing;