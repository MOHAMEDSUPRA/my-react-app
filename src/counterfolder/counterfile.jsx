import React, { useEffect, useState } from "react";

export default function Counter({initialValue, step}) {


const [count, setCount] = useState(initialValue)
const [age, setAge] = useState(18)
const [time, setTime] = useState(new Date())
let timer = null

useEffect(() => {
console.log("every render!")
})

useEffect(() => {
    timer = setInterval(() => {
        setTime(new Date())
        console.log('tick')
    }, 1000)
    return () => {
        clearInterval(timer)
    }
},[])

useEffect(() => {
console.log("component mounted !")
}, [count])

useEffect(() => {
console.log("component Updated !")
}, [age])
return <div>
    <div>
        <p>{time.toLocaleString()}</p>
    </div>
    <span>
        <button onClick={()=> {
            setCount(prevState => {
            return prevState + step
            })
            }
            }>Click to increment !!</button>

        <button onClick={()=> {
            setCount(0)
            }
            }>Reset</button>
        il ya {count} secondes
    </span>
    <div>
        <button onClick={() => 
            setAge(pS => {
                return pS + 1
            })
        }>Age is {age} if you want to add 1 year click on me !</button>
    </div>
</div>
}

// export default class Counter extends React.Component {
// constructor(props) {
// super(props);
// this.state = {
// counter: 0
// }
// console.log("hi from constructor")
// }
// handleClick = () => {
// this.setState(
// prevState => {
// return { counter: prevState.counter+1 }
// }
// )
// }

// shouldComponentUpdate(nextProps, nextState) {
// console.log(nextState, this.state);
// if (nextState.counter !== this.state.counter) {
// return true
// }
// return false
// }

// componentDidMount() {
// console.log("Component Mounted")
// }

// componentDidUpdate(prevP, PrevS) {
// console.log("Component Updated")
// console.log(PrevS, this.state)

// }


// handleReset = () => {
// this.setState({ counter: 0 })
// }

// render() {
// console.log("hi from Render")
// return <div>
    // <button onClick={this.handleClick}>Click to increment !! </button>
    // <button onClick={this.handleReset}>Reset !! </button>
    // Il y a {this.state.counter} secondes
    // </div>
// }
// }
