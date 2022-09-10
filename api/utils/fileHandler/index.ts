import fs from 'vite-plugin-fs/browser';

const PATH = './data/users.json';

export const createFile = (content: string): boolean => {
    try {
        fs.writeFile(PATH, content);
    } catch (error) {
        throw new Error(`error: ${error}`);
    }

    return true
}