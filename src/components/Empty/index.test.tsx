import '@testing-library/jest-dom'
import { render, screen } from '../../utils/test-utils';
import { Empty } from './index'

describe('ApplicationRow', async () => {
    it('should render the component', () => {
        const message = "My message to empty component";
        render(
            <Empty message={message} />
        )
        expect(screen.getByText(message)).toBeInTheDocument()
    })
});