import React from 'react';

export default class WorkingWithRefs extends React.Component {


    constructor() {
        super();
        this.state = {
            name: "Anshul"
        }
    }

    changeUncontrollerElement() {

        alert(this.refs.uncontrolledElements.value)
        this.refs.uncontrolledElements.value = "Mayank";
    }

    render() {
        return (
            <div>
                <input type="text" ref="uncontrolledElements" value={this.state.name} style={{marginRight: '5px'}} />
                <input type="button" onClick={this.changeUncontrollerElement.bind(this)} value="Click to Update"/>
            </div>
        )
    }
}