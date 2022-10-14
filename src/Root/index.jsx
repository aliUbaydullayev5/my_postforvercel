import React from 'react'
import {Block} from './style'
import Navbar from "../Components/Navbar";
import {Route, Routes, Navigate} from 'react-router-dom'
import AboutMePage from "../Pages/AboutMePage";
import HomePage from "../Pages/HomePage";
import AdminPage from "../Pages/AdminPage";

const Root = () => {
    return(
        <Block>
            <Routes>
                <Route path={'/'} element={<Navbar />} >
                    <Route path={'/home'} element={<HomePage />} />
                    <Route path={'/about'} element={<AboutMePage />} />
                    <Route path={'/admin'} element={<AdminPage />} />
                    <Route path={'/'} element={<Navigate to={'/home'} />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>
            </Routes>
        </Block>
    )
}

export default Root