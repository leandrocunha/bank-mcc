import './index.css';

interface IEmpty {
    message: string;
}

export const Empty = (props: IEmpty): JSX.Element => {
    const { message } = props;

    return (
        <div className="empty">
            {message}
        </div>
    )
}