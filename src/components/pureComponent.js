import React from 'react';

export default class PureComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            user: {
                firstName: "Gupta"
            }
        }
    }

    updateState = () => {

        setTimeout(() => {
            this.setState({
                user: {
                    firstName: "aaa"
                }
            })
        }, 1000)
    }

    componentDidMount() {
        this.updateState();
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {

        console.log("Render Called Again")
        return (
            <div>
                <RegularChildComponent name={this.state.name} />
                <PureChildComponent name={this.state.name} />
            </div>
        )
    }
}

class RegularChildComponent extends React.Component {
    render() {
        console.log("Regular Component Rendered..");
        return <div>{this.props.name}</div>
    }
}

class PureChildComponent extends React.PureComponent {
    render() {
        console.log("Pure Component Rendered..")
        return <div>{this.props.name}</div>
    }
}