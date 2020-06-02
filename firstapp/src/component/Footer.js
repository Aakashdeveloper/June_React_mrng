import React from 'react';

const Footer  = (props) => {
    console.log(props)
    return(
        <footer>
             <hr/>
            <center>
                <h3>&copy; NareshIT {props.year} | {props.type} </h3>
            </center>
        </footer>
    )
}

export default Footer;
