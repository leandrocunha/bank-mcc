import { describe, expect, it } from "vitest";
import { createConfiguration } from ".";

describe('Configuration', () => {
    it('should create a configuration', () => {
        const mockConfig = {
            id: 'aa00bb11',
            author: 'leandroscunha@gmail.com',
            type: 'Metadata',
            application_name: 'My new Application Title',
            created_at: new Date()
        };

        const result = createConfiguration(mockConfig);
        expect(result).toBeTypeOf('string');
    })
})