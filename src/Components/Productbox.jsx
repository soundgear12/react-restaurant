import React from 'react';

function Productbox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt=''/>
            </div>

            <div className='a-b-text'>
                <h2> {} </h2>
                <button className='prodcutbox-button'>Order Now</button>
            </div>
        </div>
    );
}

export default Productbox;