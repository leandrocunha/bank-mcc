import fs from 'vite-plugin-fs/browser';
import { IReadDirAPIResponse, SimpleDirent } from '../types'

export interface IResponse {
    statusCode: number
    statusMessage: string
    data: SimpleDirent | string | null
    error: boolean
}

export const createFile = async(content: string, filename: string, path: string): boolean => {
    try {
        await fs.writeFile(`${path}${filename}`, content);
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

export const readDir = async (dirPath: string): Promise<IReadDirAPIResponse> => {
    try {
        const files = await fs.readdir(dirPath);
        return {
            statusCode: 200,
            statusMessage: 'Success',
            data: files,
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