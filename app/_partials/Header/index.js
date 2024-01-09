import { links } from './data'
import './style.css'
import Link from 'next/link'

export default function Header() {
    return(
        <header className="w-full flex items-center justify-between px-5 py-4 border-b-2">
            <div className='text-left'>
                <h1 className='text-3xl font-bold'>To-do list</h1>
                <small>Simple to-do list app</small>
            </div>

            <nav className="">
                <ul className='flex items-center'>
                {links.map((item) => {
                    return(
                        <li className="">
                            <Link className='py-1 px-4 hover:bg-slate-700 hover:text-white transition duration-300' href={item.url}>{item.label}</Link>
                        </li>
                    )
                })}
                </ul>
            </nav>
        </header>
    )

}