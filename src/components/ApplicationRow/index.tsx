import fs from 'vite-plugin-fs/browser'
import TimeAgo from 'react-timeago'
import { useEffect, useState } from 'react'
import { IApplication } from '../../../api/Application'
import { Heading } from '../Heading'
import './index.css'


interface IProps {
    applicationId: string
}

const PATH = './data/applications/'

export const ApplicationRow = (props: IProps): JSX.Element => {
    
    const [ data, setData ] = useState<IApplication | undefined>();
    const { applicationId } = props;
    const filepath = `${PATH}${applicationId}`;
    
    const loadData = async (): Promise<void> => {
        const filecontent = await fs.readFile(filepath);
        setData(JSON.parse(filecontent));
    }

    useEffect(() => {
        loadData()
    }, []);
    
    return (
        <div className="application-row">
            <Heading text={data?.name} />
            <p className="application-row__uuid">{data?.uuid}</p>
           <TimeAgo className="application-row__created-at" date={data?.created_at} />
        </div>
    )
}