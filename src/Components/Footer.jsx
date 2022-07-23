import React from 'react'
import logo from '../Assets/Images/logo.svg'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import {MdMarkEmailUnread} from 'react-icons/md'
import {TbLocation} from 'react-icons/tb'

function Footer() {
    
  return (
    <div className='w-full bg-white  mx-auto px-16 py-4'>
        <div className='w-full md:flex justify-between py-4 h-24'>
            <img src={logo} className='hidden md:flex'/>
            <div className=''>
                <p className='my-0 flex flex-row'>Ikuti <span className='text-merah-bs mx-1' > Beta Smart </span> di media sosial<BsFacebook size={20} className='mx-1'/><BsInstagram size={20}  className='mx-1'/></p>
                <p className='my-0 flex flex-row'>Hubungi <span className='text-merah-bs mx-1'> Beta Smart </span> di <MdMarkEmailUnread size={20} className='mx-1'/><BsWhatsapp size={20} className='mx-1'/> </p>
            </div>
            <button className='flex mt-1 p-2 justify-center items-center text-white font-bold bg-merah-bs rounded-md'><TbLocation size={20} className='mx-2'/>Lihat Alamat di GMaps</button>
        </div>
    </div>
  )
}

export default Footer