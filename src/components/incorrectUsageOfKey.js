import React from 'react';

export default class IncorrectUsageOfKey extends React.Component {
    constructor() {
        super();
        this.state = {
            userNameList: ["Mayank", "Meha", "Anshul"],
            newUser: ""
        }
    }

    addUser = () => {
        this.setState({
            userNameList: [this.state.newUser, ...this.state.userNameList],
            newUser: ""
        })
    }

    getNewUserData = (event) => {
        this.setState({
            newUser: event.target.value
        })
    }

    render() {
        return (
            <>
                { 
                    this.state.userNameList.map((employee) => {
                        return (<div style={{color: 'red', padding: '10px', margin: '10px', borderBottom: '1px solid black'}}>
                            <b style={{paddingRight: '5px'}}>User Name: {employee}</b>
                            <input type="text" placeholder="Enter User Description" />
                        </div>)
                    })
                }

                <input type="text" value={this.state.newUser} onChange={(event) => this.getNewUserData(event)} />
                <input type="button" value="Click To Add User" onClick={this.addUser} />
            </>
        )
    }
}