import React, { useState } from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';
import { Link } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(false);
    
    const menuList = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'Sobre', path: '/sobre' },
        { id: 3, title: 'Serviços', path: '/servicos' },
        { id: 4, title: 'Portfolio', path: '/portfolio' },
        { id: 5, title: 'Contatos', path: '/contatos' }
    ];

    return (
        <div className='flex items-center justify-between'>
            
            <div>
                <h2 className='text-[30px] font-bold text-white'>
                    Arthur <span className='text-red-600'>Bueno</span>
                </h2>
            </div>

            
            <div className='hidden md:flex gap-4'>
                {menuList.map((item) => (
                    <div key={item.id}>
                        <Link to={item.path}>
                            <h2 className='text-white hover:border-[1px] border-red-700 
                            rounded-full text-[20px] px-3 py-1 cursor-pointer'>
                                {item.title}
                            </h2>
                        </Link>
                    </div>
                ))}
                
                {/* <Link to="/me-contrate">
                    <h2 className='text-white hover:border-[1px] border-red-700 
                    rounded-full text-[20px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r 
                    from-red-500 ring-offset-red-800'>
                        Me contrate
                    </h2>
                </Link> */}
            </div>

            
            <div className='md:hidden'>
                {!toggle 
                    ? <HiBars3BottomRight onClick={() => setToggle(!toggle)} className='text-white text-[22px]' />
                    : <HiOutlineXMark onClick={() => setToggle(!toggle)} className='text-white text-[22px]' />
                }
                {toggle && <MenuOverlay menuList={menuList} />}
            </div>
        </div>
    );
}

export default Header;
