import fs from "vite-plugin-fs/browser";
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Empty } from "../../../components/Empty";
import { Heading } from "../../../components/Heading";
import { Page } from "../../../components/Page";
import { UserRow } from "../UserRow";

interface SimpleDirent {
  name: string;
  dir: boolean;
}

export function UsersList() {
  const [users, setUser] = useState<SimpleDirent[]>([]);
  const navigate = useNavigate();

  const handleOnclick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/users/new");
  };

  const loadUsers = async (): Promise<void> => {
    const files = await fs.readdir("./data/users");
    setUser(files);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Page>
      <header className="main-page__header">
        <Heading text="Users" />
        <Button label="New User" onClick={handleOnclick} />
      </header>
      <section className="main-page__section">
        {!!users.length && (
          <div className="application-row--wrapper">
            {users.map((uuid) => (
              <UserRow userId={uuid} key={uuid} />
            ))}
          </div>
        )}
        {!users.length && (
          <Empty message="There is no Users yet, try create a few clicking on the button above right." />
        )}
      </section>
    </Page>
  );
}
