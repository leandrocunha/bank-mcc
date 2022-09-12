import '@testing-library/jest-dom'
import { vi } from 'vitest';
import { readFile } from '../../../api/utils/fileHandler';
import { render, screen } from '../../utils/test-utils';
import { ApplicationRow } from './index'

describe('ApplicationRow', async () => {
    vi.mock('../../../api/utils/fileHandler', () => ({
        readFile: vi.fn(() => {
            const uuid: string = '123-abc-456-def';
            return Promise.resolve(JSON.stringify({
                statusCode: 200,
                statusMessage: 'Success',
                data: JSON.stringify([{ uuid }]),
                error: false
            }))
        })
    }));

    it('should render the component', () => {
        const uuid = '123-abc-456-def';
        render(
            <ApplicationRow applicationId={uuid} />
        )
        expect(readFile).toHaveBeenCalled();
    })
});