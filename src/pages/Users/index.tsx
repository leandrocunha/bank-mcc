import { Route, Routes } from "react-router-dom";
import { UsersList } from "./UsersList";
import { UsersNew } from "./UsersNew";

export function Users(): JSX.Element {
  return (
    <Routes>
      <Route index element={<UsersList />} />
      <Route path="new" element={<UsersNew />} />
    </Routes>
  );
}
