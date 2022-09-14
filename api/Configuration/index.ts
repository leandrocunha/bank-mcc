import { IResponseError } from "../Application";
import { createFile, readDir, readFile } from "../utils/fileHandler";

export interface IConfiguration {
    uuid: string
    application: string
    type: string
    name?: string
    owner?: string
    manager?: string
    role?: string
    created_at: Date
}

export interface IResponseSuccess {
    statusText: string;
    statusCode: number;
    statusMessage: string;
    data: object
}

const PATH = './data/configurations/'
const SNAPSHOT_PATH = './data/snapshots/'

export const createConfiguration = async (config: IConfiguration): Promise<IResponseError | IResponseSuccess> => {

    const {
        uuid,
        application,
        type,
        name,
        owner,
        manager
    } = config;

    const cleanedOwner = (owner && owner !== 'Owner') ? owner : undefined
    const cleanedManager = (manager && manager !== 'Manager') ? manager : undefined
    const cleanedConfig = { ...config, owner: cleanedOwner, manager: cleanedManager }
    
    Object.keys(cleanedConfig).forEach(key => cleanedConfig[key] === undefined && delete cleanedConfig[key])
    
    console.log(cleanedConfig);
    if(!uuid || !application || !type) {
        return {
            statusText: 'error',
            statusCode: 200,
            statusMessage: 'User not create'
        };
    }

    await createFile(JSON.stringify(cleanedConfig), `${uuid}.json`, PATH);
    await createSnapshot(JSON.stringify(cleanedConfig), application);
    
    return {
        statusText: 'success',
        statusCode: 200,
        statusMessage: 'Configuration created with successful!',
        data: config
    };
}

export const createSnapshot = async (fileContent: string, application: string): Promise<any> => {
    const snapshotFile = await readFile(`${SNAPSHOT_PATH}${application}-snapshot.json`);

    if(snapshotFile.error) {
        await createFile(fileContent, `${application}-snapshot.json`, SNAPSHOT_PATH)
    }

    const previousSnapshotFileContent = JSON.parse(snapshotFile.data);
    const newConfiguration = JSON.parse(fileContent);
    const newSnapshotFileContent = { ...previousSnapshotFileContent, ...newConfiguration }

    await createFile(JSON.stringify(newSnapshotFileContent), `${application}-snapshot.json`, SNAPSHOT_PATH)
}