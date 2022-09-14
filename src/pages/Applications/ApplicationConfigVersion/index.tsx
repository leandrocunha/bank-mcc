import { useEffect, useState } from "react";
import Timeago from "react-timeago";
import { listConfigurations } from "../../../../api/Configuration";
import { Button } from "../../../components/Button";

const PATH = './data/configurations/'

export const ApplicationConfigVersions = ({ uuid, onClick }) => {
    const [ versions, setVersions ] = useState([]);

    useEffect(() => {
        (async () => {
            const configurations = await listConfigurations(PATH, uuid)
            configurations.data && setVersions(configurations.data)
        })()
    }, []);

    return (
        <main className="application-details__table">
            <header className="application-details__table__header">
                <p className="application-details__table__header__column-name">Configuration's versions</p>
                <p className="application-details__table__header__column-name">Created at</p>
                <p> </p>
            </header>
            <section className="application-details__rows">
                {
                    versions.map(version =>
                        <div className="application-details__rows__row" key={version.uuid}>
                            <p>{version.uuid}</p>
                            <p><Timeago date={version.created_at} live={false} /></p>
                            <p><Button onClick={onClick} label="apply"/></p>
                        </div>                         
                    )
                }                           
            </section>
     </main>
    )
}