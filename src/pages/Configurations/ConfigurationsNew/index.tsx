import React, { ChangeEvent, createRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  createConfiguration,
  IConfiguration,
} from "../../../../api/Configuration";
import { Page } from "../../../components/Page";
import { Button } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { Select } from "../../../components/Form/Select";
import "./index.css";
import { listApplication } from "../../../../api/Application";
import { listUsers } from "../../../../api/User";

type configurationType =
  | {
      uuid: string;
      name: string;
    }
  | undefined;

const APPLICATION_PATH = "./data/applications/";
const USERS_PATH = "./data/users/";
const CONFIGURATIONS_TYPE: Array<configurationType> = [
  { uuid: "631793d9-meta-data-b9ca-96628afef44d", name: "Metadata" },
  { uuid: "7dd6ec8f-tech-nica-ldat-ac51e84bd6a2", name: "Technical Data" },
];
const CONFIGURATIONS_ROLE = [
  { uuid: "631793d9-admi-nist-rato-r6628afef44d", name: "Administrator" },
  { uuid: "9db4ff57-edit-orca-8c4a-108d4cbf5902", name: "Editor" },
  { uuid: "7dd6ec8f-read-only-9091-3c51e84bd6a2", name: "Read-Only" },
];

export function ConfigurationsNew() {
  const [applications, setApplications] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [configurationType, setConfigurationType] =
    useState<configurationType>();

  const inputApplicationRef = createRef<HTMLSelectElement>();
  const inputTypeRef = createRef<HTMLSelectElement>();
  const inputNewNameRef = createRef<HTMLInputElement>();
  const inputOwnerRef = createRef<HTMLSelectElement>();
  const inputManagerRef = createRef<HTMLSelectElement>();
  const inputRoleRef = createRef<HTMLSelectElement>();

  const navigate = useNavigate();

  const handleOnSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const uuid: string = uuidv4();
    const application: string | undefined = inputApplicationRef.current?.value;
    const type: string | undefined = inputTypeRef.current?.value;
    const name: string | undefined =
      inputNewNameRef.current?.value === ""
        ? undefined
        : inputNewNameRef.current?.value;
    const owner: string | undefined = inputOwnerRef.current?.value;
    const manager: string | undefined = inputManagerRef.current?.value;
    const role: string | undefined = inputRoleRef.current?.value;
    const created_at: Date = new Date();

    if (owner && type && application) {
      const payload: IConfiguration = {
        uuid,
        application,
        type,
        name,
        owner,
        manager,
        role,
        created_at,
      };
      await createConfiguration(payload);
      navigate("/configurations");
    }
  };

  const handleOnClick = (): void => {
    navigate("/configurations");
  };

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selected_uuid = event?.target?.value;
    const selectedType = CONFIGURATIONS_TYPE.find(
      (type) => type?.uuid === selected_uuid
    );
    setConfigurationType(selectedType);
  };

  useEffect(() => {
    Promise.all([
      listApplication(APPLICATION_PATH),
      listUsers(USERS_PATH),
    ]).then(async (values) => {
      await setApplications(values[0].data);
      await setAuthors(values[1].data);
    });
  }, []);

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
          <Heading className="form__title" size="h3" text="New Configuration" />
          <Select
            name="application"
            options={applications}
            placeholder="Application"
            ref={inputApplicationRef}
          />
          <Select
            name="type"
            onChange={handleOnChange}
            options={CONFIGURATIONS_TYPE}
            placeholder="Type"
            ref={inputTypeRef}
          />
          {typeof configurationType === "object" && (
            <>
              <hr className="form__divider" />
              {configurationType?.name === "Metadata" ? (
                <>
                  <input
                    className="input"
                    name="name"
                    placeholder="New name"
                    ref={inputNewNameRef}
                    type="text"
                  />
                  <Select
                    name="owner"
                    options={authors}
                    placeholder="Owner"
                    ref={inputOwnerRef}
                  />
                  <Select
                    name="manager"
                    options={authors}
                    placeholder="Manager"
                    ref={inputManagerRef}
                  />
                </>
              ) : (
                configurationType?.name === "Technical Data" && (
                  <Select
                    name="role"
                    options={CONFIGURATIONS_ROLE}
                    placeholder="Role"
                    ref={inputRoleRef}
                  />
                )
              )}
            </>
          )}
          <Button label="Create Configuration" type="submit" />
        </form>
      </section>
    </Page>
  );
}
