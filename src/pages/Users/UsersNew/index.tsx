import React, { createRef } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Page } from "../../../components/Page";
import { Button } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { createUser, IUser } from "../../../../api/User";
import "./index.css";

export function UsersNew() {
  const inputNameRef = createRef<HTMLInputElement>();
  const inputEmailRef = createRef<HTMLInputElement>();
  const navigate = useNavigate();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const name: string | undefined = inputNameRef.current?.value;
    const email: string | undefined = inputEmailRef.current?.value;
    const uuid: string = uuidv4();
    const created_at: Date = new Date();

    if (name && email) {
      const payload: IUser = { uuid, name, email, created_at };
      createUser(payload);
      navigate("/users");
    }
  };

  const handleOnClick = (): void => {
    navigate("/users");
  };

  return (
    <Page>
      <header className="main-page__header">
        <Button
          className="main-page__header__button"
          label="Back"
          onClick={handleOnClick}
        />
      </header>
      <section className="main-page__section">
        <form className="form" onSubmit={handleOnSubmit}>
          <Heading className="form__title" size="h3" text="New User" />
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            ref={inputNameRef}
          />
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Email"
            ref={inputEmailRef}
          />
          <Button label="Create User" type="submit" />
        </form>
      </section>
    </Page>
  );
}
