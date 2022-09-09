import { describe, expect, it } from 'vitest';
import { createUser } from '.';

describe('createUser', () => {
    it('should create a user', () => {
        const mockUser = { name: 'Leandro Cunha', email: 'leandroscunha@gmail.com' };
        const result = createUser(mockUser);
        expect(result).toBe(mockUser);
    });
});