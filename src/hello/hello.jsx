import { Component } from "react";

export default class HelloWorld extends Component {

    componentDidMount() {
        console.log("Component Mounted")
    }

    componentDidUpdate(prevP, PrevS)    {
        console.log("Component Updated")
        console.log(PrevS, this.state)
        
    }

    componentWillUnmount() {
        console.log("Component Dead")
    }

    render() {
        return <>
            <h1>Hello {this.props.lastName}</h1>
        </>
    }
}