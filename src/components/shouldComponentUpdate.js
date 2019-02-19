import React from "react";

export default class ShouldComponentUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    componentWillMount() {
        this.setState({
            name: "Meha"
        });
        console.log("componentWillMount")
    }

    componentDidMount() {
        this.setState({
            name: "Anshul"
        });

        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.dir("shouldComponentUpdate");
        return true;
    }

    consoleMessage() {
        console.log("Function Called");
        this.forceUpdate();
    }

    render() {
        console.dir("render");
        return (
            <div id="mainData">
                <p>{this.state.name}</p>
                <input type="button" value="Click" onClick={this.consoleMessage} />
            </div>
        )
    }
}