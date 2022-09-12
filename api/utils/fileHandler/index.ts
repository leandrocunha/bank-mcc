import fs from 'vite-plugin-fs/browser';

export interface IResponse {
    statusCode: number
    statusMessage: string
    data: string | null
    error: boolean
}

export const createFile = (content: string, filename: string, path: string): boolean => {
    try {
        fs.writeFile(`${path}${filename}`, content);
    } catch (error) {
        throw new Error(`error: ${error}`);
    }

    return true
}

export const readFile = async (filePath: string): Promise<IResponse> => {
    try {
        const content = await fs.readFile(filePath);
        return {
            statusCode: 200,
            statusMessage: 'Success',
            data: content,
            error: false
        }
    } catch (error) {
        return {
            statusCode: 500,
            statusMessage: 'Error',
            data: null,
            error: true
        }
    }

}