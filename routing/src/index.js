import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import Posts from './component/Post';
import Profile from './component/Profile';
import {BrowserRouter, Route, Link} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
     <div>
         <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/post">Post</Link></li>
             <li><Link to="/profile">Profile</Link></li>
         </ul>
         <Route exact path="/" component={Home}></Route>
         <Route path="/post" component={Posts}></Route>
         <Route path="/profile" component={Profile}></Route>
     </div>
    </BrowserRouter>
    ,document.getElementById('root'))


