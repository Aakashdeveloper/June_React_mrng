import React from 'react';

const PostDetails = (props) => {
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-success">
        <div className="panel-heading">
            <h3>PostDetails</h3>
        </div>
        <div className="panel-body">
            <h1>Post Details Page of {props.match.params.topic}</h1>
            <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </p>
        </div>
    </div>
    )
}

export default PostDetails;