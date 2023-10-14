import React, {lazy} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {RouterNames} from "shared/enums/RouterNames";

const InstitutePage = lazy(() => import("./Institute/InstitutePage"));
const SuperiorsPage = lazy(() => import("./Institute/Superiors/SuperiorsPage"));
const HistoricalPage = lazy(() => import("./Institute/Historical/HistoricalPage"));

const ContactPage = lazy(() => import("./Contacts/ContactPage"))
const EntrancePage = lazy(() => import("./Entrance/EntrancePage"))
const EducationPage = lazy(() => import("./Education/EducationPage"))
const NewsPage = lazy(() => import("./News/NewsPage"))
const SciencePage = lazy(() => import("./Science/SciencePage"))
const WhyPage = lazy(() => import("./Institute/Why/WhyPage"))
const PublicInfoPage = lazy(() => import("./Institute/PublicInfo/PublicInfoPage"))
const HeroesPage = lazy(() => import("./Heroes/HeroesPage"))
const FacultyPage = lazy(() => import("./Faculty/FacultyPage"))
const DepartmentPage = lazy(() => import("./Department/DepartmentPage"))
const UnitPage = lazy(() => import("./Unit/UnitPage"))
const HomePage = lazy(() => import("./Home/HomePage"));


export const Routing = () => {


    return (
        <Routes>
            <Route path={RouterNames.CONTACTS} element={<ContactPage/>}/>
            <Route path={RouterNames.ENTRANTS} element={<EntrancePage/>}/>
            <Route path={RouterNames.STUDY} element={<EducationPage/>}/>
            <Route path={RouterNames.SCIENCE} element={<SciencePage/>}/>

            <Route path={RouterNames.INSTITUTE} element={<InstitutePage/>}/>
            <Route path={RouterNames.CHIEFS} element={<SuperiorsPage/>}/>
            <Route path={RouterNames.HISTORY} element={<HistoricalPage/>}/>
            <Route path={RouterNames.WHY_MITIT} element={<WhyPage/>}/>
            <Route path={RouterNames.PUBLIC_INFO} element={<PublicInfoPage/>}/>
            <Route path={RouterNames.HEROES} element={<HeroesPage/>}/>

            <Route path={RouterNames.HOME} element={<HomePage/>}/>

            <Route path={RouterNames.NEWS} element={<NewsPage/>}/>
            <Route path={RouterNames.FACULTY + "/:id"} element={<FacultyPage/>}/>
            <Route path={RouterNames.DEPARTMENT + "/:id"} element={<DepartmentPage/>}/>
            <Route path={RouterNames.UNIT + "/:id"} element={<UnitPage/>}/>

            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

