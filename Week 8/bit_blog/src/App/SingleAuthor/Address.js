import React from 'react'

const Address = (props) => {

    return (
        <div className="row">
            <div className='author-address offset-1 col-6'>
                <h3> Address : </h3>
                <p> Street :    {props.street}</p>
                <p> City :    {props.city}</p>
                <p> ZipCode : {props.zipCode} </p>
            </div>
             <div className="author-address offset-1 col-4">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97664.19522117081!2d9.477201703771577!3d24.53850627929574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x122c34592770aaf5%3A0x74a43f19b4fffa40!2sDjanet%2C+Algeria!5e0!3m2!1sen!2srs!4v1528489910157" width="300" height="200" title='map'></iframe>
         </div>
        </div>

    )

}

export default Address;