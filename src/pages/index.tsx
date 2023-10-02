import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const TestPage = lazy(() => import("./test/TestPage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/test" element={<TestPage/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

