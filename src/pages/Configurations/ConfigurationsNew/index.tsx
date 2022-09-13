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
    { uuid: '123-abc', name: 'Metadata' },
    { uuid: '321-cde', name: 'Thecnical Data' }
]

export const ConfigurationsNew = () => {

    const [applications, setApplications] = useState([])
    const [authors, setAuthors] = useState([])
    
    const inputAuthorRef = createRef<HTMLSelectElement>()
    const inputTypeRef = createRef<HTMLSelectElement>()
    const inputApplicationRef = createRef<HTMLSelectElement>()

    const navigate = useNavigate();

    const handleOnSubmit = (event:React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        
        const author: string | undefined = inputAuthorRef.current?.value;
        const type: string | undefined = inputTypeRef.current?.value;
        const application: string | undefined = inputApplicationRef.current?.value;
        const uuid: string = uuidv4();
        const created_at: Date = new Date();
        
        if(author && type && application) {
            const payload: IConfiguration = {
                uuid,
                author,
                type,
                application,
                created_at
            };
            createConfiguration(payload);
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
                        name="author"
                        options={authors}
                        placeholder="Author"
                        ref={inputAuthorRef}
                    />
                    <Select
                        name="type"
                        options={CONFIGURATIONS_TYPE}
                        placeholder="Type"
                        ref={inputTypeRef}
                    />                    
                    <Button label="Create Configuration" type="submit" />
                </form>
            </section>
        </Page>
    )
}