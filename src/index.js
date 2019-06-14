import React from 'react';
import ReactDOM from 'react-dom';
import HigherOrderComponents from "./components/demosLast/higherOrderComponents";

function ShowName(props) {
    return (
        <>
            <div>User Name: {props.userName}</div><hr></hr>
        </>
    )
}

function ShowAge(props) {
    return (
        <>
            <div>User Age: {props.userAge}</div><hr></hr>
        </>
    )
}

function ShowDesignation(props) {
    return (
        <>
            <div>User Designation: {props.userDesignation}</div><hr></hr>
        </>
    )
}

var NewComponentName = HigherOrderComponents().getHigherOrderComponent(ShowName);
var NewComponentAge = HigherOrderComponents().getHigherOrderComponent(ShowAge);
var NewComponentDesignation = HigherOrderComponents().getHigherOrderComponent(ShowDesignation);


ReactDOM.render((
    <>
        <NewComponentName />
        <NewComponentAge />
        <NewComponentDesignation />
    </>
), document.getElementById('root'));

