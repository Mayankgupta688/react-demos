import React from "react";


class ChildComponent extends React.Component {

    constructor() {
        super();
        this.state= {
            age: 10
        }

        setTimeout(() => {
            this.setState({
                age: "20"
            })
        }, 1000);
    }

    UNSAFE_componentWillMount() {
        console.dir("Child Component Will Mounted");
    }

    render() {
        console.dir("Child Component Rendered");
        return <div>{this.props.name}</div>
    }
    componentDidMount() {
        console.dir("Child Component Mounted");
    }

    UNSAFE_componentWillReceiveProps() {
        console.dir("Child Component recieved The New Props")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.dir("Should Component Update Called for Child Element");
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.dir("Child Component Will Update");
    }

    getSnapshotBeforeUpdate() {
        console.dir("Child Element Getting Snapshot")
    }

    componentDidUpdate() {
        console.dir("Child Component Updated")
    }

    
}

export default class ChildUpdatesAlways extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'Mayank'
        }

        setTimeout(() => {
            this.setState({
                name: "Anshul"
            })
        }, 1000);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return <ChildComponent name={this.state.name} />
    }
}