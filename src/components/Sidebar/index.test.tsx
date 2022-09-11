import '@testing-library/jest-dom'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '../../utils/test-utils'
import { Sidebar } from './index'

describe('Page', async () => {
    it('should render the component', () => {
        render(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        )
        expect(screen.getByText("Home")).toBeInTheDocument()
    })
});