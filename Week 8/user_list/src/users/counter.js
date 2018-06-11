import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        let male = 0;
        let female = 0;
        for (let i in this.props.listOfUsers) {
            if (this.props.listOfUsers[i].gender === 'female') {
                female += 1

            } else {
                male += 1
            }
        }
        return (

            <div className="offset-8 offset-lg-9 offset-xl-10">
                <span>  Male:  {male}</span>
                <span>  Female:  {female}</span>

            </div>


        )
    }
}
export default Counter