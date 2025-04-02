import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import App from './App';
// import Counter from './counterfolder/counterfile';
// import Form from './formsFolder/forms';
// import FruitList from './fruitFolder/fruits';
// import HelloWorld from './hello/hello';
// import ToggleName from './toggle/toggleName';
// import ProductList from './tp/store/productList';
import FormTp from './tp/form/form';
import LanguageSwitcher from "./tp/LanguageSwitcher/LanguageSwitcher";
import ProductList from "./tp/store/productList";
import Page from "./tp/LanguageSwitcher/Page";
import {FormValidationBeginner} from "./tp/formValidation/FormValidationBeginner";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    {/*<App/>*/}
    {/* <Counter initialValue={5} step={2}/> */}
    {/* <Form /> */}
    {/* <FruitList /> */}
    {/* <Counter /> */}
    {/* <Counter initialValue={0} step={1}/> */}
    {/* <ToggleName lastName="Amine"/> */}
    {/* <ProductList /> */}
    {/*<FormTp/>*/}
    {/*<Page/>*/}
    <FormValidationBeginner/>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
