import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '../../utils/test-utils'
import { Header } from './index'

describe('Header', async () => {
    it('should render the component', () => {
        render(
            <Router>
                <Header />
            </Router>
        )
        expect(screen.getByText('MCC')).toBeInTheDocument()
    })
});