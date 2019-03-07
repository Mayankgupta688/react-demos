import React from 'react';
import ReactDOM from 'react-dom';
import TestingComponent from "../components/testingComponent";

it("should Render Component", () => {
    const divElement = document.createElement("div");
    ReactDOM.render(<TestingComponent />, divElement);
})


