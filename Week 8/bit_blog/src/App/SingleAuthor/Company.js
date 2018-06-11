import React from 'react'

const Company = (props) => {

    return (
            <div className='company-data offset-1'>
                <h3> Company :    </h3>
                <p> name :  {props.name}</p>
                <p> slogan :   {props.slogan}</p>

            </div>
    )

}
export default Company