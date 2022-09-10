import { Header } from './../../components/Header';
import { Sidebar } from './../../components/Sidebar';

export const Users = () => {
    return (
        <>
        <Header />
        <section className="main">
          <Sidebar />
          <section className="content">
          <h1>Users</h1>
          </section>
        </section>
        </>
    )
}