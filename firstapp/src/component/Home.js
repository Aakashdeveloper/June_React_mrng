import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <h2>Home</h2>
                <Footer year="2021" type="Education"/>
            </div>
        )
    }
}

export default Home;