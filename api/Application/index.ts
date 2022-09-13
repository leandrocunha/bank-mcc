import { readDir } from "../utils/fileHandler";
import { SimpleDirent } from "../utils/types";

export interface IApplication {
    uuid: string;
    name: string | undefined;
    created_at: Date;
}

export interface IResponseError {
    statusText: string;
    statusCode: number;
    statusMessage: string;
}

const PATH: string = './data/applications/';

export const createApplication = (payload: IApplication): (IResponseError | Function) => {
    const { uuid, name, created_at} = payload;

    if(!uuid && !name && !created_at) {
        return {
            statusText: 'error',
            statusCode: 200,
            statusMessage: 'Application did not create.'
        }
    }

    return (createFile: Function): string => {
        createFile(JSON.stringify(payload), uuid, PATH)
        return 'Application created succesfuly!'
    }
}

export const listApplication = async (dirPath: string) => {
    if(!dirPath) {
        return {
            statusText: 'error',
            statusCode: 200,
            statusMessage: 'Missing a directory path for applications.'
        }
    }
    
    const result = await readDir(dirPath);
    
    return { ...result, data: result.data?.map(uuid => ({ uuid, name: uuid }))}
}

export const updateApplication = (data: IApplication): String => {
    return 'Application updated succesfuly!'
}

export const deleteApplication = (data: IApplication): String => {
    return 'Application deleted succesfuly!'
}