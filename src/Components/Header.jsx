import React from 'react';

function Header() {
    return (
        <div id="main">
            <div className='header-heading'>
                <h3>It's A Great Time For A Good Tasting Burger!</h3>
                <h1><span>BURGER</span> OF<br/>WEEK</h1>
                <p className='details'>Wow. I really wish this burger looked that tasty IRL.</p>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>Order</a>
                </div>
            </div>
        </div>
    );

}

export default Header;