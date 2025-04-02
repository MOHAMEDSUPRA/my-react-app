export default function LanguageSwitcher({ onLanguageChange }) {

    const handleLanguageChange = (e) => {
        e.preventDefault()
        onLanguageChange(e.target.dataset.lang)
    }

    return <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" data-lang='EN' style={{cursor: "pointer"}} onClick={handleLanguageChange}>English</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-lang='ES' style={{cursor: "pointer"}} onClick={handleLanguageChange}>Español</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-lang='FR' style={{cursor: "pointer"}} onClick={handleLanguageChange}>Français</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-lang='AR' style={{cursor: "pointer"}} onClick={handleLanguageChange}>العربية</a>
            </li>
        </ul>
    </>
}