import "./index.css";

interface IEmpty {
  message: string;
}

export function Empty(props: IEmpty): JSX.Element {
  const { message } = props;

  return <div className="empty">{message}</div>;
}
