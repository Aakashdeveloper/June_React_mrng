import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsList from './NewsList';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    /*
        var numarray = [47,23,56,32,21,43]
        numarray.filter((data) => { return data>25})
    */

    filterNews(keywords){
        const output = this.state.news.filter((data) => {
            return (data.title.indexOf(keywords)>-1)
        })

        this.setState({filtered:output})
    }

    render(){
        return(
            <div>
                <Header/>
                <NewsList newsdata={this.state.news}/>
                <Footer year="2021" type="Education"/>
            </div>
        )
    }
}

export default Home;