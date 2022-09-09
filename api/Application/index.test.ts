import { describe, expect, it, test } from 'vitest';
import { createApplication } from '.';

describe('Application', () => {
    it('should create a new application', () => {
        const mockData = { id: '0011220033', name: 'My awsesome App' };
        const result = createApplication(mockData);
        expect(result).toBeTypeOf('string');
    })

    it('should update a new application', () => {
        const mockData = { id: '0011220033', name: 'My awsesome App updated' };
        const result = createApplication(mockData);
        expect(result).toBeTypeOf('string');
    })

    it('should create a new application', () => {
        const mockData = { id: '0011220033', name: 'My awsesome App' };
        const result = createApplication(mockData);
        expect(result).toBeTypeOf('string');
    })
})