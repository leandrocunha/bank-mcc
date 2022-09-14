import React, { ChangeEventHandler } from "react";
import './index.css';

interface IProps {
    name: string
    onChange?: ChangeEventHandler<HTMLSelectElement>,
    options: Array<any>
    placeholder: string
}

export const Select = React.forwardRef<HTMLSelectElement, IProps>((props, ref): JSX.Element => {
    const { name, onChange, options, placeholder } = props;
    
    return (
        <select
            className="select"
            name={name}
            onChange={onChange}
            ref={ref}
        >
            <option defaultValue={placeholder}  selected={true} disabled hidden>
                {placeholder}
            </option>
            {
                options.map(({ uuid, name }) =>
                    <option key={uuid} value={uuid}>{name}</option>       
                )
            }
        </select>
    )
})