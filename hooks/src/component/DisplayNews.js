import React from 'react';

function DisplayComponent(props){
    const renderList = ({mydata}) => {
        if(mydata){
            return mydata.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>News Deatils</h2>
            </center>
            {renderList(props)}
        </div>

    )
}


export default DisplayComponent