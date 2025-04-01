import { useState } from "react"

export default function Form(){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleNameInputChange = () => {
        const name = document.querySelector('#name').value
        const age = document.querySelector('#age').value
        setName(name)
        setAge(age)
    }
    const handleSubmit = (noteReload) => {
        noteReload.preventDefault()
        console.log({
            name,
            age
        })
    }
    return <div>
        <form>
            <input type="text" id="name" onChange={handleNameInputChange} placeholder="name" />
            <input type="number" id="age" onChange={handleNameInputChange} placeholder="age" />
            <input type="submit" onClick={handleSubmit} value="Submit"/>
        </form>
    </div>
}