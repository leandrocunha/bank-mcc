import { describe, expect, it, vitest } from "vitest";
import { createConfiguration, IConfiguration } from ".";

describe('Configuration', () => {
    let createFile: Function;
    let mockData: IConfiguration;

    beforeEach(() => {
        createFile = vitest.fn(() => 'mock');
        mockData = {
            uuid: '123-abc-456-def',
            application: '987-xyz-654-klm',
            author: '865-mdj-917-keh',
            type: 'Metadata',
            created_at: new Date()
        }
    });

    it('should create a configuration', () => {
        const result = createConfiguration(mockData)(createFile);
        expect(createFile).toBeCalled();
        expect(result).toBeTypeOf('object');
    })
})