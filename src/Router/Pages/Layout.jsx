import {Link, Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <nav className="nav justify-content-center bg-dark">
                <li className="nav-item">
                    <Link to={'/'} className={"nav-link text-white"}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/blogs'} className={"nav-link text-white"}>Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link to={'contacts'} className={"nav-link text-white"}>Contacts</Link>
                </li>
            </nav>
            <div className="container-fluid w-75 mx-auto">
                <Outlet />
            </div>
        </>
    )
}