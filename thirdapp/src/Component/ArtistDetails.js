import React,{Component} from 'react';
import Headers from './Header';
import axios from 'axios';
import Albums from './Albums'; 

const url = "http://localhost:8900/artists";
class ArticleDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }
    render(){
        //console.log(console.log(this.state.details))
        //var mydetails  = this.state.details;
        var {details} = this.state
        return(
            <div>
                <Headers/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{
                            background:`url('/images/covers/${details.cover}.jpg')`
                        }}>

                        </span>
                    </div>
                    <h3>{details.name}</h3>
                    <div className="bio_text">
                        {details.bio}
                    </div>
                    <Albums albumlist={details.albums}></Albums>
                </div>
            </div>
        )
    }

    componentDidMount(){
        axios.get(`${url}/${this.props.match.params.id}`)
        .then((response) => {this.setState({details:response.data})})
    }


}

export default ArticleDetails;