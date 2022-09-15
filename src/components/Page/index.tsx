import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import "./index.css";

interface IPageProps {
  children?: React.ReactNode;
}

export function Page(props: IPageProps): JSX.Element {
  return (
    <>
      <Header />
      <section className="main">
        <Sidebar />
        <section className="content">{props.children}</section>
      </section>
    </>
  );
}
