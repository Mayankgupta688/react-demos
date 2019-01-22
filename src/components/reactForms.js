import React from 'react';

export default class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'initialName',
            userAge: 0,
            designation: "Learner",
            gender: 'M'
        }

        this.handleInputChanges = this.handleInputChanges.bind(this);
    }

    handleInputChanges(event) {

        var changedValue = event.target.value;

        if(event.target.className === "userName") {
            this.setState({
                userName: changedValue
            });
        } else if (event.target.className === "userAge") {
            this.setState({
                userAge: changedValue
            });
        } else if (event.target.className === "userDesignation") {
            this.setState({
                designation: changedValue
            });
        } else {
            this.setState({
                gender: changedValue
            });
        }
        
    }

    render() {
        return (
            <div>
                <input onChange={this.handleInputChanges} class="userName" type="text" placeholder="Enter Name" value={this.state.userName} /><br/>
                <input onChange={this.handleInputChanges} class="userAge" type="text" placeholder="Enter Age" value={this.state.userAge} /><br/>
                <input onChange={this.handleInputChanges} class="userDesignation" type="text" placeholder="Enter Designation" value={this.state.designation} /><br/>
                <input onChange={this.handleInputChanges} class="userGender" type="text" placeholder="Enter Gender" value={this.state.gender} /><br/>
            </div>
        )
    }
}