import { Route, Routes } from "react-router-dom";
import { ConfigurationsList } from "./ConfigurationsList";
import { ConfigurationsNew } from "./ConfigurationsNew";

export function Configurations(): JSX.Element {
  return (
    <Routes>
      <Route index element={<ConfigurationsList />} />
      <Route path="new" element={<ConfigurationsNew />} />
    </Routes>
  );
}
