import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listApplication } from "../../../api/Application";
import { ApplicationRow } from "../../components/ApplicationRow";
import { Button } from "../../components/Button";
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/Heading";
import { Page } from "../../components/Page";
import "./index.css";

interface SimpleDirent {
  name: string;
  dir: boolean;
}

const PATH = "./data/applications";

export function ApplicationsList() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<SimpleDirent[]>([]);

  const handleOnclick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/applications/new");
  };

  useEffect(() => {
    (async () => {
      const result = await listApplication(PATH);
      result?.data && setApplications(result.data);
    })();
  }, []);

  return (
    <Page>
      <header className="main-page__header">
        <Heading text="Applications" />
        <Button label="New Application" onClick={handleOnclick} />
      </header>
      <section className="main-page__section">
        {!!applications.length && (
          <div className="application-row--wrapper">
            {applications.map(({ uuid }) => (
              <ApplicationRow applicationId={uuid} key={uuid} />
            ))}
          </div>
        )}
        {!applications.length && (
          <Empty message="There is no Applications yet, try create a few clicking on the button above right." />
        )}
      </section>
    </Page>
  );
}
