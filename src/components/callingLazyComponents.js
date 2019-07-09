import React, { lazy, Suspense } from "react";

// Since we have the Lazy Loading, components are loaded in different chunks, making the main chunk less heavy..

// The following stuff can bring more performance in cases when there are multiple Comonents and when we are defining Routes..

export default class CallingLazyComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dynamic Import Dummy"
        }
    }

    changeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        if(this.state.name === "Lazy Load") {
            const LazyComponent = lazy(() => import("./lazyComponent"));
            return (
                <div>
                    <h1>This is the Base User: {this.state.name}</h1>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyComponent />
                    </Suspense>
                </div>
            )
        } else if(this.state.name === "Dynamic Import") {

            import("./lazyComponent").then((LazyComponent) => {
                console.dir("Component Loaded Dynamically")
            })

            import("./callingUnmount").then((LazyComponent) => {
                console.dir("Component Loaded Dynamically")
            })

            return <div>This is the Guest User</div>
        } else {
            return (
                <>
                    <input value={this.state.name} onChange={this.changeInput} />
                    <h1>{this.state.name}</h1>
                </>
            )
        }
        
    }
}
