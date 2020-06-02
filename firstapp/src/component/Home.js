import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
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