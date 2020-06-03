import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super()

        this.state={
            title:'Developer Funnel',
            keyWord:'User Text Here'
        }
    }

    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({keyWord:event.target.value?event.target.value:'User Text Here'})
    }

    render(){
        console.log('Inside render')
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input onChange={this.handleChange}/>
                    <p>{this.state.keyWord}</p>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;
