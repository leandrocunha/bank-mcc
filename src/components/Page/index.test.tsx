import '@testing-library/jest-dom'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '../../utils/test-utils'
import { Page } from './index'

describe('Page', async () => {
    it('should render the component', () => {
        const message = "My children message"
        const children = <p>{message}</p>
        render(
            <BrowserRouter>
                <Page>
                    {children}
                </Page>
            </BrowserRouter>
        )
        expect(screen.getByText(message)).toBeInTheDocument()
    })
});