import {useRef, useState} from "react";

export function FormValidationBeginner() {
    const nameField = useRef(null)
    const emailField = useRef(null)
    const messageField = useRef(null)
    const countryField = useRef(null)
    const acceptField = useRef(null)
    const [errors, setErrors] = useState([])

    const validateForm = () => {
        const nameValue = nameField.current.value
        const emailValue = emailField.current.value
        const messageValue = messageField.current.value
        const countryValue = countryField.current.value
        const acceptChecked = acceptField.current.checked
        let isFormValid = true
        if (nameValue.trim() === '') {
            setErrors(prevState => {
                return [...prevState, 'Name is required']
            })
            isFormValid = false
        }
        if (emailValue.trim() === '') {
            setErrors(prevState => {
                return [...prevState, 'Email is required']
            })
            isFormValid = false
        } else if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
            setErrors(prevState => {
                return [...prevState, 'Email is invalid']
            })
            isFormValid = false
        }
        if (messageValue.trim() === '') {
            setErrors(prevState => {
                return [...prevState, 'Message is required']
            })
            isFormValid = false
        }
        if (countryValue === null) {
            setErrors(prevState => {
                return [...prevState, 'Country is required']
            })
            isFormValid = false
        }
        if (!acceptChecked) {
            setErrors(prevState => {
                return [...prevState, 'Accept terms and conditions']
            })
        }
        return isFormValid
    }

    const handleSubmit = (e) => {
        setErrors([])
        if (!validateForm()) {
            e.preventDefault();
        }
    }
    return (
        <>
            <div className={"container-fluid w-75 mx-auto my-5"}>
                {errors.length > 0 && <div className={"alert alert-danger"}>
                    <strong>Errors:</strong>
                    <ul>
                        {errors.map((error, index) => {
                            return <li key={index}>{error}</li>
                        })}
                    </ul>
                </div>}
                <h1>Form Validation Beginner</h1>
                <hr/>

                <form onSubmit={handleSubmit} className={"border border-light-subtle p-xxl-5 rounded-3"}>
                    <div className={"form-outline mb-4"}>
                        <label className={"form-label"} htmlFor="name">Name</label>
                        <input type="text" id="name" className={"form-control"} ref={nameField}/>
                    </div>
                    <div className={"form-outline mb-4"}>
                        <label className={"form-label"} htmlFor="email">Email address</label>
                        <input type="text" id="emai" className={"form-control"} ref={emailField}/>
                    </div>
                    <div className={"form-outline mb-4"}>
                        <label className={"form-label"} htmlFor="message">Message</label>
                        <textarea id="message" rows={4} className={"form-control"} ref={messageField}/>
                    </div>
                    <div className={"form-outline mb-4"}>
                        <label className={"form-label"} htmlFor="country">Country</label>
                        <select id="country" className={"form-control"} ref={countryField}>
                            <option value={null}>Select Country</option>
                            <option value="france">France</option>
                            <option value="germany">Germany</option>
                            <option value="spain">Spain</option>
                        </select>
                    </div>
                    <div className={"form-check mb-4"}>
                        <input type={"checkbox"} id={"accept"} className={"form-check-input mb-4"} ref={acceptField}/>
                        <label className={"form-check-label"} htmlFor="accept">Accept terms and conditions</label>
                    </div>
                    <button type="submit" className={"btn btn-primary btn-block"}>Submit</button>
                </form>
            </div>

        </>
    )
}