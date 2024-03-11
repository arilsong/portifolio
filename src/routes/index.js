import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Home from "../Pages/Home";
import NotFound from "../Pages/404";
import Projects from "../Pages/Projects";


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;