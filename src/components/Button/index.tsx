import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import './index.css';

interface IButton {
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Button = (props: IButton): JSX.Element => {
    const { label, onClick, type = 'button' } = props;
    
    return (
        <button
            className="primary"
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    )
}