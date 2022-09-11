import './index.css';

interface IHeading {
    className?: string;
    size?: Sizes;
    text?: string;
}

type Sizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading = (props: IHeading): JSX.Element => {
    const { className, size = 'h1', text } = props;
    const composedClassName = `heading ${className}`;
    const Tag = size as keyof JSX.IntrinsicElements;
    return (
        <Tag className={composedClassName}>{text}</Tag>
    )
}