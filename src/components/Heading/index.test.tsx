import '@testing-library/jest-dom'
import { render, screen } from '../../utils/test-utils';
import { Heading } from './index'

describe('Heading', async () => {
    it('should render the component', () => {
        const text = "MCC Dashboard";
        render(
            <Heading text={text} />
        )
        expect(screen.getByText(text)).toBeInTheDocument()
    })
});