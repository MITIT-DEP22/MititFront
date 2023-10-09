import {lazy} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {RouterNames} from "../shared/enums/RouterNames";
import {InstitutePage} from "./Institute/InstitutePage";
import {ChiefsPage} from "./Chiefs/ChiefsPage";
import {HistoricalPage} from "./Historical/HistoricalPage";
import ContactPage from "./Contacts/ContactPage";

const HomePage = lazy(() => import("./Home/HomePage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path={RouterNames.INSTITUTE} element={<InstitutePage/>}/>
            <Route path={RouterNames.CONTACTS} element={<ContactPage/>}/>
            <Route path={RouterNames.CHIEFS} element={<ChiefsPage/>}/>
            <Route path={RouterNames.HISTORY} element={<HistoricalPage/>}/>
            <Route path={RouterNames.DEPARTMENTS} element={<ChiefsPage/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

