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

