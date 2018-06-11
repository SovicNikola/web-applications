import React from 'react';
import { Link } from 'react-router-dom'




const Header = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">

            <div className="container" id="relative">
                <h4 id="headerText" className="col-12 iconsWhite">BIT People</h4>
                <span id="headerSpan">
                    <span><Link to='/about' className='link'>About</Link></span>
                    <a onClick={props.refHandler}  ><i className="material-icons iconsWhite" >refresh</i></a>
                    {(!props.display) ? <a onClick={props.handler}> <i className="material-icons iconsWhite" >view_list</i></a>
                        : <a onClick={props.handler}> <i className="material-icons iconsWhite" >view_module</i></a>}
                </span>
            </div>



        </nav>
    )
}

export default Header;