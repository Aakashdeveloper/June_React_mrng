import React, {Component} from 'react';

class RegisterComponent extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register Form
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"
                            className="form-control"
                            />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default RegisterComponent