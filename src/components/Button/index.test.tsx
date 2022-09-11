import '@testing-library/jest-dom'
import { render, screen } from '../../utils/test-utils';
import { Button } from './index'

describe('ApplicationRow', async () => {
    it('should render the component', () => {
        const label = "My Label";
        render(
            <Button label={label} />
        )
        expect(screen.getByText(label)).toBeInTheDocument()
    })
});