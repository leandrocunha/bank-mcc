import { Route, Routes } from "react-router-dom";
import { ApplicationsList } from "../ApplicationsList";
import { ApplicationsNew } from "../ApplicationsNew";
import { ApplicationsDetails } from "./ApplicationsDetails";

export function Applications() {
  return (
    <Routes>
      <Route index element={<ApplicationsList />} />
      <Route path="new" element={<ApplicationsNew />} />
      <Route path=":uuid" element={<ApplicationsDetails />} />
    </Routes>
  );
}
