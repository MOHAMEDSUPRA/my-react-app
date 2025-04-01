import { useState } from "react"

export default function FruitList() {
    const [fruit, setFruit] = useState('')
    const [fruitList, setFruitList] = useState([])

    const displayFruits = () => fruitList.map((f,fruitkey) => (<li key={fruitkey}>{f}</li>))

    const handleInput = () => {
        const fruitValue = document.querySelector('#fruit').value
        setFruit(fruitValue)
    }

    const handleAddFruit = (e) => {
        e.preventDefault()
        setFruitList([...fruitList,fruit])
    }

    return <div>
        <span>
            <form>
                <input type="text" onChange={handleInput} id="fruit"/>
                <input type="submit" onClick={handleAddFruit} value="add fruit" />
            </form>
        </span>
        <h1>Fruits :</h1>
        <ul>
            {displayFruits()}
        </ul>
    </div>
}