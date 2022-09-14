import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../../components/Button"
import { Heading } from "../../../components/Heading"
import { Page } from "../../../components/Page"

export const ApplicationsDetails = props => {
    const { uuid } = useParams();
    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate('/applications')
    }

    return (
        <Page>
            <header className="main-page__header">
                <Heading text={uuid} />
                <Button label="Back to Applications List" onClick={handleOnclick} />
            </header>            
            <p>App details</p>
        </Page>
    )
}