import React from 'react' ;

function Dinner (props) {
    return (
    <div>
        <h1>we are serving {props.dishName} </h1>
        <h2>we are serving sweet {props.sweetName}</h2>
    </div>
    )
}
export default Dinner;