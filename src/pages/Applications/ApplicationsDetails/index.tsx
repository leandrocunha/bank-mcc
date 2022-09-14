import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { loadApplication } from "../../../../api/Application"
import { Button } from "../../../components/Button"
import { Heading } from "../../../components/Heading"
import { Page } from "../../../components/Page"
import { ApplicationConfigVersions } from "../ApplicationConfigVersion"
import './index.css'

const PATH = './data/snapshots';

export const ApplicationsDetails = props => {
    const [ application, setApplication ] = useState();
    const { uuid } = useParams();
    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate('/applications')
    }

    useEffect(() => {
        (async () => {
            const result = await loadApplication(`${PATH}/${uuid}-snapshot.json`)
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
                        <div className="application-details__header__item">
                            <span className="application-details__header__item__label">Owner:</span>
                            {application?.owner ?? ' - '}
                        </div>
                        <div className="application-details__header__item">
                            <span className="application-details__header__item__label">Manager:</span>
                            {application?.manager ?? ' - '}
                        </div>
                        <div className="application-details__header__item">
                            <span className="application-details__header__item__label">Role:</span>
                            {application?.role ?? ' - '}
                        </div>
                    </header>
                    <ApplicationConfigVersions uuid={uuid} />
                </div>
            </section>
        </Page>
    )
}