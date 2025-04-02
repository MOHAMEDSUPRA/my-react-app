import LanguageSwitcher from "./LanguageSwitcher";
import {useState} from "react";

export default function Page() {
    const [currentLang, setcurrentLang] = useState('EN')
    const displayMessage = () => {
        switch (currentLang) {
            case 'EN': return 'Hello';
            case 'FR': return 'Bonjour';
            case 'ES': return 'Hola';
            case 'AR': return 'مرحبًا';
        }
    };
    return <>
        <LanguageSwitcher onLanguageChange={(value) => {
            setcurrentLang(value)
        }}/>
        <hr/>
        <span>Current language: {currentLang}</span>
        <hr/>

        <div className="alert alert-primary" role="alert">
            <h4 className="alert-heading">{displayMessage()}</h4>
            <p>{currentLang === 'EN' ? "Hello Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque facilis, laboriosam nihil obcaecati optio quae! Ab cum illo inventore, neque similique ullam. Amet consequatur minima, quae reiciendis unde voluptate!" : ""}</p>
        </div>
    </>;
}
