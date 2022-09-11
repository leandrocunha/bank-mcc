import { Header } from './../../components/Header';
import { Sidebar } from './../../components/Sidebar';

export const Configurations = () => {
    return (
        <>
            <Header />
            <section className="main">
            <Sidebar />
            <section className="content">
                <h1>Configurations</h1>
            </section>
            </section>
        </>
    )
}