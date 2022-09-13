import React from "react";
import './index.css';

interface IProps {
    name: string
    options: Array<any>
    placeholder: string
}

export const Select = React.forwardRef<HTMLSelectElement, IProps>((props, ref): JSX.Element => {
    const { name, options, placeholder } = props;
    return (
        <select
            className="select"
            name={name}
            ref={ref}
        >
            <option defaultValue={placeholder}  selected={true} disabled hidden>
                {placeholder}
            </option>
            {
                options.map(({ uuid, name }) =>
                    <option key={uuid} defaultValue={uuid}>{name}</option>       
                )
            }
        </select>
    )
})