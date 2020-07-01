import React,{Component} from 'react';

const url = "http://localhost:5000/api/auth/userinfo"
class Profile extends Component{
    constructor(){
        super()

        this.state={
            user:''
        }
    }

    render(){
        return(
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3>User Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>Hi {this.state.user.name}</h1>
                    <h2>Your Email Id is {this.state.user.email}</h2>
                    <h2>Your Role is {this.state.user.role}</h2>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':'token value from login'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}

export default Profile;