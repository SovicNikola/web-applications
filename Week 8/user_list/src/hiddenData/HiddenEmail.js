import React from 'react'


const HiddenEmail = (element) => {

    let email = element.split('@');
    let newEmEl = email[0].slice(0, 3);
    let lastStringEmail = email[0].substring(email[0].length - 4, email[0].length - 1)


    email[0] = `${newEmEl}...${lastStringEmail}`;
    let emailJoin = email.join('@');

    return emailJoin;
}

export default HiddenEmail;