import React, { createRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { createConfiguration, IConfiguration } from "../../../../api/Configuration"
import { Page } from "../../../components/Page";
import { Button } from "../../../components/Button"
import { Heading } from "../../../components/Heading"
import { Select } from "../../../components/Form/Select";
import './index.css';
import { listApplication } from "../../../../api/Application";
import { listUsers } from "../../../../api/User";

const APPLICATION_PATH = './data/applications/';
const USERS_PATH = './data/users/';
const CONFIGURATIONS_TYPE = [
    { uuid: '631793d9-meta-data-b9ca-96628afef44d', name: 'Metadata' },
    { uuid: '7dd6ec8f-tech-nica-ldat-ac51e84bd6a2', name: 'Technical Data' }
]
const CONFIGURATIONS_ROLE = [
    { uuid: '631793d9-admi-nist-rato-r6628afef44d', name: 'Administrator' },
    { uuid: '9db4ff57-edit-orca-8c4a-108d4cbf5902', name: 'Editor' },
    { uuid: '7dd6ec8f-read-only-9091-3c51e84bd6a2', name: 'Read-Only' }
]

export const ConfigurationsNew = () => {

    const [applications, setApplications] = useState([])
    const [authors, setAuthors] = useState([])
    
    const inputApplicationRef = createRef<HTMLSelectElement>()
    const inputOwnerRef = createRef<HTMLSelectElement>()
    const inputTypeRef = createRef<HTMLSelectElement>()
    const inputManagerRef = createRef<HTMLSelectElement>()
    const inputRoleRef= createRef<HTMLSelectElement>()

    const navigate = useNavigate();

    const handleOnSubmit = async (event:React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        
        const owner: string | undefined = inputOwnerRef.current?.value;
        const type: string | undefined = inputTypeRef.current?.value;
        const application: string | undefined = inputApplicationRef.current?.value;
        const uuid: string = uuidv4();
        const created_at: Date = new Date();
        
        if(owner && type && application) {
            const payload: IConfiguration = {
                uuid,
                owner,
                type,
                application,
                created_at
            };
            await createConfiguration(payload);
            navigate('/configurations')
        }
    }

    const handleOnClick = ():void => {
        navigate('/configurations');
    }

    useEffect(() => {
            Promise.all([
                listApplication(APPLICATION_PATH),
                listUsers(USERS_PATH)
            ]).then(async (values) => {
                await setApplications(values[0]['data'])
                await setAuthors(values[1]['data'])
              });
    }, []);
    
    return (
        <Page>
            <header className="main-page__header">
                <Button
                    className="main-page__header__button"
                    label="Back"
                    onClick={handleOnClick}
                />
            </header>
            <section className="main-page__section">
                <form className="form" onSubmit={handleOnSubmit}>
                    <Heading
                        className="form__title"
                        size="h3"
                        text="New Configuration"
                    />
                    <Select
                        name="application"
                        options={applications}
                        placeholder="Application"
                        ref={inputApplicationRef}
                    />
                    <Select
                        name="type"
                        onChange={handleOnChange}
                        options={CONFIGURATIONS_TYPE}
                        placeholder="Type"
                        ref={inputTypeRef}
                    />
                    <hr className="form__divider" />
                    <input
                        className="input"
                        name="name"
                        placeholder="New name"
                        type="text"
                    />
                    <Select
                        name="owner"
                        options={authors}
                        placeholder="Owner"
                        ref={inputOwnerRef}
                    />
                    <Select
                        name="manager"
                        options={authors}
                        placeholder="Manager"
                        ref={inputManagerRef}
                    />

                    <Select
                        name="role"
                        options={CONFIGURATIONS_ROLE}
                        placeholder="Role"
                        ref={inputRoleRef}
                    />
                    <Button label="Create Configuration" type="submit" />
                </form>
            </section>
        </Page>
    )
}