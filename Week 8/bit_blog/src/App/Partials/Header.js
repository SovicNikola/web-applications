import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {

    return (

        <header className="col">

         <div id="header">
                <span id="header_span">BIT BLOG</span>
    
                <nav className="nav justify-content-end ">
    
                    <div>
                        <Link to='/' >Home </Link>
                    </div>
                    <div>
                        <Link to='/Authors'>Authors</Link>
                    </div>
    
                    <div>
                        <Link to='/About'>About </Link>
                    </div>
    
                </nav>
         </div>
        </header>

    )

}

export default Header;






































