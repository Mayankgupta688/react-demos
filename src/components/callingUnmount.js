import React from 'react';


// Here is this program we can see that when the Parent/Top Component changes.. Then the Components are Unmounted and then Mounted again

// It says if the Top Element is different, then the Application should re-render the Parent Component..

class ChildComponent extends React.Component {
    render() {
        if(this.props.name === "Mayank") {
            return (
                <div>This is First Component: {this.props.name}</div>
            )
        } else {
            return (
                <p>This is the Second Component: {this.props.name}</p>
            )
        }
    }

    componentWillUnmount() {
        alert("Component Unmounted")
    }
}
export default class CallingUnmount extends React.Component {
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
        }, 4000)
        
    }

    render() {

        if(this.state.name == "Mayank") {
            return (
                <div>
                    <ChildComponent name={this.state.name} />
                </div>
            )
        } else {
            return (
                <p>
                    <ChildComponent name={this.state.name} />
                </p>
            )
        }
        
    }

    componentWillUnmount() {
        alert("Component Unmounted")
    }
        
}

