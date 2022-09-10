import { Header } from './../../components/Header';
import { Sidebar } from './../../components/Sidebar';

export const Home = () => {
    return (
        <>
        <Header />
        <section className="main">
          <Sidebar />
          <section className="content">
            <h1>Home</h1>
          </section>
        </section>
        </>
    )
}