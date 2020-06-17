import React, { Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import ArticleDetails from './ArtistDetails';
import FormsComponent from './FormComponent';
import Headers from './Header';

const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Headers/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/artist/:id" component={ArticleDetails}/>
                <Route exact path="/forms" component={FormsComponent}/>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;