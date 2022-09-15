import React, { createRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Page } from "../../components/Page";
import { createApplication } from "../../../api/Application";
import "./index.css";
import { useNavigate } from "react-router-dom";

interface IPayload {
  uuid: string;
  name: string | undefined;
  created_at: Date;
}
export function ApplicationsNew() {
  const inputRef = createRef<HTMLInputElement>();
  const navigate = useNavigate();

  const handleOnSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    const name: string | undefined = inputRef.current?.value;
    const uuid: string = uuidv4();
    const created_at: Date = new Date();

    if (name && uuid && created_at) {
      const payload: IPayload = { uuid, name, created_at };
      await createApplication(payload);
      navigate("/applications");
    }
  };

  const handleOnClick = (): void => {
    navigate("/applications");
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
          <Heading className="form__title" size="h3" text="New Application" />
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            ref={inputRef}
          />
          <Button label="Create Application" type="submit" />
        </form>
      </section>
    </Page>
  );
}
