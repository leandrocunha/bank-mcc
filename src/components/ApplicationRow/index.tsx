import TimeAgo from "react-timeago";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IApplication } from "../../../api/Application";
import { readFile } from "../../../api/utils/fileHandler";
import { Heading } from "../Heading";
import "./index.css";

interface IProps {
  applicationId: string;
}

const PATH = "./data/applications/";

export function ApplicationRow(props: IProps): JSX.Element {
  const [data, setData] = useState<IApplication | undefined>();
  const { applicationId } = props;
  const filepath = `${PATH}${applicationId}.json`;

  useEffect(() => {
    (async () => {
      const result = await readFile(filepath);
      result?.data && setData(JSON.parse(result.data));
    })();
  }, []);

  return (
    <div className="application-row">
      <Link to={`/applications/${data?.uuid}`}>
        <Heading
          className="application-row__name"
          size="h5"
          text={data?.name}
        />
      </Link>
      <p className="application-row__uuid">{data?.uuid}</p>
      {data?.created_at && (
        <TimeAgo
          className="application-row__created-at"
          date={data?.created_at}
          live={false}
        />
      )}
    </div>
  );
}
