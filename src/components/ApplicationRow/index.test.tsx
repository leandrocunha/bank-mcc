import '@testing-library/jest-dom'
import { render, screen } from '../../utils/test-utils';
import { ApplicationRow } from './index'

describe('ApplicationRow', async () => {
    it('should render the component', () => {
        const uuid = "my-uuid-001";
        render(
            <ApplicationRow applicationId={uuid} />
        )
        expect(screen.getByText(uuid)).toBeInTheDocument()
    })
});