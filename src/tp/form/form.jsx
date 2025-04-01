import React from 'react';

export default function FormTp() {
  // *************** SIMPLE WAY WITH USE STATE TARGET EACH INPUT ***************
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [rules, setRules] = useState(false);

  // const inputNameChange = () => {
  //     //console.log(document.querySelector('#name').value)
  //     setName(document.querySelector('#name').value)
  //     console.log(name)

  // }
  // const inputAgeChange = () => {
  //     setAge(document.querySelector('#age').value)
  //     console.log(age)
  // }

  // const inputRulesChange = () => {
  //   setRules(document.querySelector('#accept').checked);
  //   console.log(rules);
  // };

  // *************** ANOTHER WAY WITH USE STATE TARGET ALL INPUT BY 1 FUNC ***************

  // const [formValues, setFormValues] = useState({
  //   name: '',
  //   age: '',
  //   country: '',
  //   accept: false,
  // });
  // const handleChange = (e) => {
  //   const currentTarget = e.currentTarget;
  //   const id = currentTarget.id;
  //   const value = currentTarget.value;
  //
  //   if (currentTarget.type === 'checkbox') {
  //     return setFormValues((prevState) => {
  //       return { ...prevState, ...{ [id]: currentTarget.checked } };
  //     });
  //   }
  //
  //   setFormValues((prevState) => {
  //     return { ...prevState, ...{ [id]: value } };
  //   });
  //   console.log(formValues);
  // };

  // *************** OTHER METHODE USING useRef  ***************

  const inputNameRef = React.useRef('');
  const inputAgeRef = React.useRef('');
  const inputCountryRef = React.useRef('');
  const inputCheckRef = React.useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      name: inputNameRef.current.value,
      age: inputAgeRef.current.value,
      country: inputCountryRef.current.value,
      check: inputCheckRef.current.checked,
    };
    console.log(formValues);
  };
  return (
    <div className="container-sm my-4">
      <form>
        {/*{JSON.stringify(formValues)}*/}
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            ref={inputNameRef}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            id="age"
            className="form-control"
            ref={inputAgeRef}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select id="country" className="form-select" ref={inputCountryRef}>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="spain">Spain</option>
          </select>
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="accept"
            ref={inputCheckRef}
          />
          <label htmlFor="accept" className="form-check-label">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
