import React from 'react';
import './covid.css';

const covid = () =>{
    return(
        <React.Fragment>
        <div className="covid">
            Please check the travel advisory issued by the concerned state government/local authorities before booking, as some places may have COVID-19 related travel/lodging restrictions.

        </div>
        <div class="scart">
        <button type="button" class="btn btn-info" id="pcart">View the Cart</button>
        <img src="https://i.ibb.co/DQxxXMF/cart1.jpg" alt="pic" class="icart"/>
        </div>

                 
        </React.Fragment>
    )
}

export default covid