import { Observable } from 'rxjs';
import React from "react";

var randomNumberGenerator = Observable.create(function(observer) {
    
  setInterval(function() {
    
    var randomNumber = Math.floor(Math.random() * 100);
    observer.next(randomNumber);
    
  }, 1000);

});

export default class WorkingWithObservables extends React.Component {
    constructor() {
        super();
        this.state = {
            inputData: 0
        }
    }

    componentDidMount() {
        randomNumberGenerator.subscribe((value) => {
            this.setState({
                inputData: value
            })
        })
    }

    render() {
        return (
            <div>Random Number Generate: {this.state.inputData}</div>
        )
    }
}

randomNumberGenerator.subscribe({
  next: function(data) {
    console.log("Input Data is: " + data)
  }, error: function(errorMessage) {
    console.log("Recieved the error with following message: " + errorMessage);
  }, complete: function() {
    console.log("Observable has completed Execution");
  }
})