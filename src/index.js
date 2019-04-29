import React from 'react';
import ReactDOM from 'react-dom';
import HigherOrderComponent from "./components/higherOrderComponents";

function SimpleComponent() {
    return <div>Hello Simple Function</div>
}

export function OtherComponent() {
    return <div>Hello Other Function</div>
}

var UserDetails = HigherOrderComponent(SimpleComponent);

var UserOtherDetails = HigherOrderComponent(OtherComponent);

ReactDOM.render(<UserOtherDetails />, document.getElementById('root'));

