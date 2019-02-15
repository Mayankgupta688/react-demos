import React from "react";

export default class ShouldComponentUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Anshul"
            })
        }, 5000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.dir("Accessing New State of Component: " + nextState.name);
        return true;
    }

    render() {
        return <div>{this.state.name}</div>
    }
}