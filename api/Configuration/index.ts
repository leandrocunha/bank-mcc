import { IResponseError } from "../Application";
import { createFile } from "../utils/fileHandler";

export interface IConfiguration {
    uuid: string
    application: string
    type: string
    name?: string
    owner?: string
    manager?: string
    created_at: Date
}

export interface IResponseSuccess {
    statusText: string;
    statusCode: number;
    statusMessage: string;
    data: object
}

const PATH = './data/configurations/'

export const createConfiguration = async (config: IConfiguration): Promise<IResponseError | IResponseSuccess> => {

    const {
        uuid,
        application,
        type,
        name,
        owner,
        manager
    } = config;
    
    if(!uuid || !application || !type) {
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
        statusMessage: 'Configuration created with successful!',
        data: config
    };
}