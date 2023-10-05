import {lazy} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {RouterNames} from "../shared/enums/RouterNames";
import {InstitutePage} from "./Institute/InstitutePage";
import ContactPage from "./Contacts/ContactPage";

const HomePage = lazy(() => import("./Home/HomePage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path={RouterNames.INSTITUTE} element={<InstitutePage/>}/>
            <Route path={RouterNames.CONTACTS} element={<ContactPage/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

