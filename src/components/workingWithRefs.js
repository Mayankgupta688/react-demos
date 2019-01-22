import React from 'react';

export default class WorkingWithRefs extends React.Component {

    changeUncontrollerElement() {
        this.refs.uncontrolledElements.value = "Mayank";
    }

    render() {
        return (
            <div>
                <input type="text" ref="uncontrolledElements" value="Anshul" style={{marginRight: '5px'}} />
                <input type="button" onClick={this.changeUncontrollerElement.bind(this)} value="Click to Update"/>
            </div>
        )
    }
}