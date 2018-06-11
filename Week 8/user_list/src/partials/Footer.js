import React from 'react';
import LastUpdate from './LastUpdate.js'

const Footer = (props) =>{ 
    const refDate = localStorage.getItem('curRefDate')
    return(

    <footer className="navbar navbar-expand-lg navbar-light bg-danger iconsWhite" id='footerNavWraper'>
        <div className="container">
            <span id='footer'> &copy; 2018 Copyright BIT</span>
            <LastUpdate date={new Date(JSON.parse(refDate))} />
        </div>

    </footer>
)}

export default Footer;