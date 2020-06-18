//Get Initial state
//set Initial state
//Before get created
//Render
//After get created

import React, {Component} from 'react';

class LifeCycle extends  Component{
    //1 Get Initial state
    constructor(props){
        super(props)
        console.log('>>>>>i am in constructor');
        //2 set Initial state
        this.state={
            title:'React App'
        }
    }

    componentWillUpdate(){
        console.log('>>>>>i am in componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('>>>>>i am in componentDidUpdate');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>inside shouldComponentUpdate");
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }
    //3Before get created
    componentWillMount(){
        console.log('>>>>>i am in componentWillMount');
    }

    //4Render
    render(){
        console.log('>>>>> Inside Render')
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() =>{this.setState({title:'Something else'})}}>
                    Click Me
                </div>
            </div>
        )
    }

    //5 After get created
    componentDidMount(){
        console.log('>>>>>i am in componentDidMount');
    }


    componentWillUnmount(){
        alert('Do you want to leave')
    }



}

export default LifeCycle;