import { Route, Routes } from "react-router-dom"
import { ApplicationsList } from "../ApplicationsList";
import { ApplicationsNew } from "../ApplicationsNew";

export const Applications = () => {
    return (
        <Routes>
            <Route index element={<ApplicationsList />} />
            <Route path="new" element={<ApplicationsNew />} />
        </Routes>
    )
}