import React from 'react'
import {Link} from 'react-router-dom';
import Header from './components/Header/header.css';

export default function Header() {
  return (
    <>
    <header className='header'>
        <nav className='header_nav'>
            <ul className='header_list'>
                <li className='header_item'><Link to='/'>Главная</Link></li>
                <li className='header_item'><Link to='/Chat'>Чат</Link></li>
                <li className='header_item'><Link to='/Api'>Api</Link></li>
            </ul>
        </nav>
    </header>

    </>
  )
}
