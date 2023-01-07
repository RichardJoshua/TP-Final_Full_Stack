import React from 'react';
import '../../Header.css';

const Header = (props) => {
    return(
        <header>
            <div className="holder">
                <div>
                    <img src="images/logo.png" with="100" alt="Transportes X"/>
                    <h1>Transportes X</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;