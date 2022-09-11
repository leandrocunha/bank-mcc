import { createFile } from "../utils/fileHandler";

export interface IConfiguration {
    uuid: string;
    author: string;
    type: string;
    application: string;
    created_at: Date
}

const PATH = './data/configurations/'

export const createConfiguration = (config: IConfiguration): object => {

    const { uuid, application, author, type } = config;
    
    if(!application || !author || !type) {
        return {
            statusText: 'error',
            statusCode: 200,
            statusMessage: 'User not create'
        };
    }

    createFile(JSON.stringify(config), `${uuid}.json`, PATH);

    return {
        statusText: 'success',
        statusCode: 200,
        statusMessage: 'Configuration created with successful!',
        data: config
    };
}