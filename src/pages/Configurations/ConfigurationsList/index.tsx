import fs from "vite-plugin-fs/browser";
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Empty } from "../../../components/Empty";
import { Heading } from "../../../components/Heading";
import { Page } from "../../../components/Page";
import { ConfigurationRow } from "../ConfigurationRow";

interface SimpleDirent {
  name: string;
  dir: boolean;
}

export function ConfigurationsList() {
  const [configurations, setConfigurations] = useState<SimpleDirent[]>([]);
  const navigate = useNavigate();

  const handleOnclick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/configurations/new");
  };

  const loadConfigurations = async (): Promise<void> => {
    try {
      const files = await fs.readdir("./data/configurations");
      setConfigurations(files);
    } catch (error) {
      // TO-DO: send it to a logger service and
      // avoid set empty state
    }
  };

  useEffect(() => {
    loadConfigurations();
  }, []);

  return (
    <Page>
      <header className="main-page__header">
        <Heading text="Configurations" />
        <Button label="New Configuration" onClick={handleOnclick} />
      </header>
      <section className="main-page__section">
        {!!configurations.length && (
          <div className="application-row--wrapper">
            {configurations.map((uuid) => (
              <ConfigurationRow configurationId={uuid} key={uuid} />
            ))}
          </div>
        )}
        {!configurations.length && (
          <Empty message="There is no Configurations yet, try create a few clicking on the button above right." />
        )}
      </section>
    </Page>
  );
}
