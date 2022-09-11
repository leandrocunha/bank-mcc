import fs from 'vite-plugin-fs/browser'
import TimeAgo from 'react-timeago';
import { useEffect, useState } from "react";
import { IUser } from "../../../../api/User";
import { Heading } from '../../../components/Heading';
import './index.css'

interface IProps {
    userId: string;
}

const PATH = './data/users/'

export const UserRow = (props: IProps): JSX.Element => {

    const [ data, setData ] = useState<IUser | undefined>();
    const { userId } = props;
    const filepath = `${PATH}${userId}`;
    
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
        <div className="user-row">
            <Heading className="user-row__name" size="h5" text={data?.name} />
            <p className="application-row__uuid">{data?.uuid}</p>
           <TimeAgo className="application-row__created-at" date={data?.created_at} />
        </div>
    )
}