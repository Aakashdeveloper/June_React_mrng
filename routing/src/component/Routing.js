import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Posts from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';

const Routing = () => {

    return(
        <BrowserRouter>
            <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand">Developer Funnel</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
               
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/post" component={Posts}></Route>
                <Route path="/post/:topic" component={PostDetails}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing