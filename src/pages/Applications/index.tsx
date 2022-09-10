import { Header } from './../../components/Header';
import { Sidebar } from './../../components/Sidebar';

export const Applications = () => {
    return (
        <>
            <Header />
            <section className="main">
            <Sidebar />
            <section className="content">
                <h1>Applications</h1>
            </section>
            </section>
        </>
    )
}