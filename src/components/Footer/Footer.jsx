import React, {useState} from 'react';
import './Footer.css'
import SearchBar from "../SearchBar/SearchBar";
import {FiSearch, FiStar, FiSettings, FiMenu} from 'react-icons/fi'
const Footer = () => {
    const [isHidden, setIsHidden] = useState(true)

    const hide = (hidden) => {
        setIsHidden(!hidden)
    }
    const footerMenu = [
        {
            icon: <FiSearch />,
            title: 'Search',
            action: () => hide(isHidden)
        },
        {
            icon: <FiStar/>,
            title: 'Favorites',
            action: () => {}
        },
        {
            icon: <FiSettings/>,
            title: 'Settings',
            action: () => {}
        },
        {
            icon: <FiMenu/>,
            title: 'Menu',
            action: () => {}
        },
    ]


    return (
        <div className='footer flex flex-col justify-center'>
            <div className='footer-search-bar'>
                {isHidden ? '' : <SearchBar/>}
            </div>
            <div className='footer-menu'>
                {
                    footerMenu.map(item => {
                        return <div onClick={item.action} className='cursor-pointer'>
                            {item.icon}
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default Footer;