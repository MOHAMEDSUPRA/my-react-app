import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Pages/Layout';
import Contacts from "./Pages/Contacts";
import Blogs from "./Pages/Blogs";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path={'blogs'} element={<Blogs />} />
                    <Route path={'contacts'} element={<Contacts />} />
                    <Route path={'*'} element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

