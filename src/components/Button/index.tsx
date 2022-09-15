import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import "./index.css";

interface IProps {
  className?: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export function Button(props: IProps): JSX.Element {
  const { className, label, onClick, type = "button" } = props;
  const composedClassName = `primary ${className}`;

  return (
    <button className={composedClassName} onClick={onClick} type={type}>
      {label}
    </button>
  );
}
