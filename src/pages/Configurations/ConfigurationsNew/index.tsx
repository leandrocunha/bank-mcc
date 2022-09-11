import React, { createRef } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Page } from "../../../components/Page";
import { Button } from "../../../components/Button"
import { Heading } from "../../../components/Heading"
import { createConfiguration, IConfiguration } from "../../../../api/Configuration"
import './index.css';

export const ConfigurationsNew = () => {
    
    const inputAuthorRef = createRef<HTMLInputElement>()
    const inputTypeRef = createRef<HTMLInputElement>()
    const inputApplicationRef = createRef<HTMLInputElement>()

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
                    <input
                        className="input"
                        type="text"
                        name="application"
                        placeholder="Application"
                        ref={inputApplicationRef}
                    />
                    <input
                        className="input"
                        type="text"
                        name="author"
                        placeholder="Author"
                        ref={inputAuthorRef}
                    />
                    <input
                        className="input"
                        type="text"
                        name="type"
                        placeholder="Type"
                        ref={inputTypeRef}
                    />                    
                    <Button label="Create Configuration" type="submit" />
                </form>
            </section>
        </Page>
    )
}