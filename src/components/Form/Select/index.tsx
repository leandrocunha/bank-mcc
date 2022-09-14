import React, { ChangeEventHandler, SetStateAction, useState } from "react";
import './index.css';

interface IProps {
    name: string
    onChange?: ChangeEventHandler<HTMLSelectElement>,
    options: Array<any>
    placeholder: string
}

export const Select = React.forwardRef<HTMLSelectElement, IProps>((props, ref): JSX.Element => {
    const { name, onChange, options, placeholder } = props;
    
    const [value, setValue] = useState<string | undefined>(undefined);
    
    const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)
        return onChange && onChange(event)
    }

    return (
        <select
            className="select"
            defaultValue={value}
            name={name}
            onChange={handleOnChange}
            ref={ref}
        >
            <option value={undefined} disabled selected>
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