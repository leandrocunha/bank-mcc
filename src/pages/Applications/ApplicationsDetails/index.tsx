import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { loadApplication } from "../../../../api/Application"
import { Button } from "../../../components/Button"
import { Heading } from "../../../components/Heading"
import { Page } from "../../../components/Page"
import './index.css'

const PATH = './data/applications';

export const ApplicationsDetails = props => {
    const [ application, setApplication ] = useState();
    const { uuid } = useParams();
    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate('/applications')
    }

    useEffect(() => {
        (async () => {
            const result = await loadApplication(`${PATH}/${uuid}`)
            console.log(result)
            result?.data && setApplication(result.data)
        })()
    }, []);

    return (
        <Page>
            <header className="main-page__header">
                <Heading text={application?.name} />
                <Button label="Back to Applications List" onClick={handleOnclick} />
            </header>
            <section className="main-page__section">
                <div className="application-details">
                    <header className="application-details__header">
                        <div className="application-details__header__item">
                            <span className="application-details__header__item__label">Name:</span>
                            {application?.name}
                        </div>
                        <div className="application-details__header__item">
                            <span className="application-details__header__item__label">UUID:</span>
                            {application?.uuid}
                        </div>
                        <div className="application-details__header__item">
                            <span className="application-details__header__item__label">Created at:</span>
                            {application?.created_at}
                        </div>
                    </header>
                    <main className="application-details__table">
                       <header className="application-details__table__header">
                            <p className="application-details__table__header__column-name">Configuration's versions</p>
                            <p className="application-details__table__header__column-name">Created at</p>
                       </header>
                       <section className="application-details__rows">
                            <div className="application-details__rows__row">
                                <p>uuid</p>
                                <p>12/24/1212</p>
                            </div>
                            <div className="application-details__rows__row">
                                <p>uuid</p>
                                <p>12/24/1212</p>
                            </div>
                            <div className="application-details__rows__row">
                                <p>uuid</p>
                                <p>12/24/1212</p>
                            </div>                            
                       </section>
                    </main>
                </div>
            </section>
        </Page>
    )
}