import fs from 'vite-plugin-fs/browser';
import { describe, expect, it, vi } from 'vitest';
import { createFile } from './index';

vi.mock('vite-plugin-fs/browser', () => ({
    default: {
        writeFile: vi.fn()
    }
}));

describe('fileHandler', () => {
    it('should create a file', () => {
        const mockContent = 'My awesome content';
        const result = createFile(mockContent, 'myfilename.json', './data/');
        expect(fs.writeFile).toHaveBeenCalled()
        expect(result).toBeTruthy();
    })
})