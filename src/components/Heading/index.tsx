import './index.css';

interface IHeading {
    text: string;
}

export const Heading = (props: IHeading): JSX.Element => {
    const { text } = props;

    return (
        <h1 className="heading">{text}</h1>
    )
}