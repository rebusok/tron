import React from 'react';
import './header.css';


const Header = () => {
    return (
        <div className="HeaderBlock">
            <h3 className="HeaderTitle">
                <a href="#">
                Game of Thrones DB
                </a>
            </h3>
            <ul className="HeaderLinks">
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;