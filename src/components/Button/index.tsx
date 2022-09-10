import './index.css';

interface IButton {
    label: string;
}

export const Button = (props: IButton): JSX.Element => {
    const { label } = props;
    
    return (
        <button className="primary">{label}</button>
    )
}