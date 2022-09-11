import fs from 'vite-plugin-fs/browser';

export const createFile = (content: string, filename: string, path: string): boolean => {
    try {
        fs.writeFile(`${path}${filename}`, content);
    } catch (error) {
        throw new Error(`error: ${error}`);
    }

    return true
}