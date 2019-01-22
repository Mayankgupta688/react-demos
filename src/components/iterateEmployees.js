import React from 'react';
import JSON from "./employees.json"

export default class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeList: JSON.employeeList
        }
    }

    renderEmployeeList() {
        return this.state.employeeList.map((employee) => {
            return (
                <div key={employee.name} style={{borderBottom: '1px solid red', padding: '10px'}}>
                    <div>Employee Name: {employee.name}</div>
                    <div>Employee Age: {employee.age}</div>
                    <div>Employee Designation: {employee.designation}</div>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.renderEmployeeList()}
            </div>
        )
    }
}