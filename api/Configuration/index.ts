import { IResponseError } from "../Application";
import { createFile } from "../utils/fileHandler";

export interface IConfiguration {
    uuid: string;
    author: string;
    type: string;
    application: string;
    created_at: Date
}

export interface IResponseSuccess {
    statusText: string;
    statusCode: number;
    statusMessage: string;
    data: object
}

const PATH = './data/configurations/'

export const createConfiguration = async (config: IConfiguration): Promise<IResponseError | Function> => {

    const { uuid, application, author, type } = config;
    
    if(!application || !author || !type) {
        return {
            statusText: 'error',
            statusCode: 200,
            statusMessage: 'User not create'
        };
    }

    await createFile(JSON.stringify(config), `${uuid}.json`, PATH);
    
    return {
        statusText: 'success',
        statusCode: 200,
        statusMessage: 'Configuration created with successful!'
    };
}