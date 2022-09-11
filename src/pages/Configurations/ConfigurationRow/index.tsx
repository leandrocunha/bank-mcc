import fs from 'vite-plugin-fs/browser'
import TimeAgo from 'react-timeago';
import { useEffect, useState } from "react";
import { IConfiguration } from "../../../../api/Configuration";
import { Heading } from '../../../components/Heading';
import './index.css'

interface IProps {
    configurationId: string;
}

const PATH = './data/configurations/'

export const ConfigurationRow = (props: IProps): JSX.Element => {

    const [ data, setData ] = useState<IConfiguration | undefined>();
    const { configurationId } = props;
    const filepath = `${PATH}${configurationId}`;
    
    const loadData = async (): Promise<void> => {
        const filecontent = await fs.readFile(filepath);
        setData(JSON.parse(filecontent));
    }

    useEffect(() => {
        loadData()
    }, []);

    if(!data) {
        return <>{ null }</>;
    }

    return (
        <div className="configuration-row">
            <Heading className="configuration-row__name" size="h5" text={data?.application} />
            <p className="configuration-row__uuid">{data?.uuid}</p>
           <TimeAgo className="configuration-row__created-at" date={data?.created_at} />
        </div>
    )
}