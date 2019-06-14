import React from "react";

export default function HigherComponentWithData() {
    var userDetails = {
        userName: "Mayank",
        userAge: 20,
        userDesignation: 'Developer'
    }

    var getHigherOrderComponent = (WrapperComponent) => {
        return function() {
            return <WrapperComponent {...userDetails}></WrapperComponent>
        }
    }

    return {
        getHigherOrderComponent: getHigherOrderComponent
    }
}

 export function ShowName(props) {
    return (
        <>
            <div>User Name: {props.userName}</div><hr></hr>
        </>
    )
}

export function ShowAge(props) {
    return (
        <>
            <div>User Age: {props.userAge}</div><hr></hr>
        </>
    )
}

export function ShowDesignation(props) {
    return (
        <>
            <div>User Designation: {props.userDesignation}</div><hr></hr>
        </>
    )
}
