import React,{Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions';

class Home extends Component {
    componentDidMount(){
        this.props.moviesList()
    }
    render(){
        return(
            <div>
                <h1>Redux</h1>
            </div>
        )
    }
}


//Help to recive the state from the store
function mapStateToProps(state){

}

//To dispatch the action
function mapDispatchToProps(){

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);