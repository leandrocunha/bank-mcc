import TimeAgo from 'react-timeago'
import { useEffect, useState } from 'react'
import { IApplication } from '../../../api/Application'
import { readFile } from '../../../api/utils/fileHandler'
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

    useEffect(() => {
        (async () => {
            const result = await readFile(filepath)
            result?.data && setData(JSON.parse(result.data));
        })()
    }, []);
    
    return (
        <div className="application-row">
            <Heading className="application-row__name" size="h5" text={data?.name} />
            <p className="application-row__uuid">{data?.uuid}</p>
           <TimeAgo className="application-row__created-at" date={data?.created_at} />
        </div>
    )
}