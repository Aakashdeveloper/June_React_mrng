import React from 'react';
import { Link } from 'react-router-dom';


const Posts = () => {
    return(
        <div className="panel panel-danger">
        <div className="panel-heading">
            <h3>Posts</h3>
        </div>
        <div className="panel-body">
            <h1>Posts Page</h1>
            <h3>JavaScript</h3>
            <Link to="/post/JavaScript">Details</Link>
            <h3>React</h3>
            <Link to="/post/React">Details</Link>
            <h3>Node</h3>
            <Link to="/post/Node">Details</Link>
            <h3>Python</h3>
            <Link to="/post/Python">Details</Link>
            <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </p>
        </div>
    </div>
    )
}

export default Posts;