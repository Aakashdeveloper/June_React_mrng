import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { latestNews,articletNews,galleryNews } from '../actions';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articletNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                Home Redux
            </div>
        )
    }

}

function mapStateToProps(state){
    console.log(state)
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)
