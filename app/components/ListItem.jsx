import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'

export default function ListItem({post}) {
    const {id, date , title} = post;
    console.log(date)
    const formattedDate =  getFormattedDate(date);
  return (
    <li className='mt-4 text-2xl text-black/90'>
        <Link className='underline hover:text-black/70' href={`/posts/${id}`}>{title}</Link>
        <br/>
        <p className='text-sm mt-1'>{formattedDate}</p>
    </li>
  )
}
