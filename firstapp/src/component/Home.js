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

    filterNews(keywords){
        const output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(keywords.toLowerCase())>-1)
        })

        this.setState({filtered:output})
    }

    render(){
        return(
            <div>
                <Header userText={(data)=> {this.filterNews(data)}}/>
                <NewsList newsdata={this.state.filtered}/>
                <Footer year="2021" type="Education"/>
            </div>
        )
    }
}

export default Home;