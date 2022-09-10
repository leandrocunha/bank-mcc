import { Button } from "../../components/Button"
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/Heading"
import { Page } from "../../components/Page"
import './index.css';

export const Applications = () => {
    return (
        <Page>
            <header className="main-page__header">
                <Heading text="Applications" />
                <Button label="New Application" />
            </header>
            <section className="main-page__section">
                <Empty message="There is no Applications yet, try create a few clicking on the button above right." />
            </section>
        </Page>
    )
}