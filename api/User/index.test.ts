import { describe, expect, it, vi } from 'vitest';
import { createUser } from '.';
import { createFile } from '../utils/fileHandler';

const spy = vi.spyOn(createFile, null);

describe('createUser', () => {
    it('should create a user', () => {
        const mockUser = { name: 'Leandro Cunha', email: 'leandroscunha@gmail.com' };
        const mockResponse = {
            statusText: 'success',
            statusCode: 200,
            statusMessage: 'User create succesfuly',
            data: mockUser
        };
        const result = createUser(mockUser);
        expect(result).toStrictEqual(mockResponse);
        expect(spy).toHaveBeenCalled();
    });

    it('should not create a user without name', () => {
        const mockUser = { name: null, email: 'leandroscunha@gmail.com' };
        const mockResponse = {
            statusText: 'error',
            statusCode: 200,
            statusMessage: 'User not create'
        };
        const result = createUser(mockUser);
        expect(result).toStrictEqual(mockResponse);
    });

    it('should not create a user without email', () => {
        const mockUser = { name: 'Leandro Cunha', email: null };
        const mockResponse = {
            statusText: 'error',
            statusCode: 200,
            statusMessage: 'User not create'
        };
        const result = createUser(mockUser);
        expect(result).toStrictEqual(mockResponse);
    });
});