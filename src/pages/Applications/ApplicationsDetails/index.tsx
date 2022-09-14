import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { loadApplication } from "../../../../api/Application"
import { Button } from "../../../components/Button"
import { Heading } from "../../../components/Heading"
import { Page } from "../../../components/Page"

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
            <p>App details</p>
        </Page>
    )
}