import React, { useState } from 'react'
import logo from '../Assets/Images/logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }



    return (
        <div className=' w-full h-24 flex justify-between items-center bg-antique mx-auto px-14 md:px-20 '>
            <img src={logo} alt="" className='' />
            <ul className='hidden md:flex'>
                <a href='/' className='text-black no-underline'><li className='p-4 hover:text-merah-bs hover:font-bold cursor-pointer'
                >Beranda</li> </a>
                <a href='/' className='text-black no-underline'><li className='p-4 hover:text-merah-bs hover:font-bold'>Testimoni</li></a>
                <a href='/paket-bimbingan' className='text-black no-underline'><li className='p-4 hover:text-merah-bs hover:font-bold'>Paket Bimbingan</li></a>
                <a href='/faq' className='text-black no-underline'><li className='p-4 hover:text-merah-bs hover:font-bold'>FAQ</li></a>
                {/* <li><button className='py-2 px-4 mt-3 bg-merah-bs text-white rounded-lg font-bold'>Daftar</button></li> */}
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}

            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-400 bg-antique ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'} >
                <img src={logo} alt="" className='p-4' />
                <ul className='uppercase p-4'>
                    <a href='/' className='text-black no-underline'><li className='p-4 border-b border-gray-300 hover:text-merah-bs hover:font-bold'>Beranda</li></a>
                    <a href='/' className='text-black no-underline'><li className='p-4 border-b border-gray-300 hover:text-merah-bs hover:font-bold'>Testimoni</li></a>
                    <a href='/paket-bimbingan' className='text-black no-underline'><li className='p-4 border-b border-gray-300 hover:text-merah-bs hover:font-bold'>Paket Bimbingan</li></a>
                    <a href='/faq' className='text-black no-underline'><li className='p-4 border-b border-gray-300 hover:text-merah-bs hover:font-bold'>Faq</li></a>
                    <a href='/' className='text-black no-underline'><li className='p-4 border-b border-gray-300 hover:text-merah-bs hover:font-bold'>Daftar</li></a>

                </ul>
            </div>
        </div>
    )
}

export default Navbar