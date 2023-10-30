import Link from 'next/link';
import { FC } from 'react'

interface IProps {
    id: number;
    title: string;
    date: string;
    desc: string;
}

export const Post: FC<IProps> = ({ title, desc, date, id }) => {
    return (
        <Link href={`posts/${id}`}>
            <div className='shadow-lg shadow-glay-950 md:shadow-xl md:shadow-gray-950 p-10 m-5 bg-slate-800	'>
                <a  key={id} className="text-slate-400 text-2xl	block">{title}</a>
                <p className='text-slate-400'>{desc}</p>
                <p className='text-slate-400'>{date}</p>
            </div>
        </Link>
    )
}