import { Component } from "react";
import HelloWorld from "../hello/hello";

export default class ToggleName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: true
        }
    }

    handelToggleDisplayName = () => {
        this.setState(prevState => {
            return { displayName: !prevState.displayName }
        })
    }

    render() {
        return <>
            <button onClick={this.handelToggleDisplayName}>{this.state.displayName.toString()}</button>
            {this.state.displayName === true ?
                <HelloWorld lastName={"amine"} />
                : undefined
            }
        </>
    }
}