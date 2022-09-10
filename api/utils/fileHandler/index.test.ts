import fs from 'vite-plugin-fs/browser';
import { describe, expect, it, vi } from 'vitest';
import { createFile } from './index';

const spy = vi.spyOn(fs, 'writeFile');

describe('fileHandler', () => {
    it('should create a file', () => {
        const mockContent = 'My awesome content';
        const result = createFile(mockContent);
        expect(spy).toHaveBeenCalled()
        // expect(result).toBeTruthy();
    })
})