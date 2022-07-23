import React from 'react'
import berhasil from '../../Assets/Images/pembayaran_berhasil.png'


function PembayaranBerhasil() {
  return (
    <div className='bg-white h-max p-16 my-10 justify-center items-center text-center place-items-center'>
        
        <img src={berhasil} className='mx-auto '/>
        <h1 className='text-5xl font-bold'>Selamat Pembayaran Kamu Telah Berhasil</h1>
        <h3 className='text-2xl font-bold'>Terimakasih Telah Bergabung di Bimbingan Belajar Beta Smart</h3>
        
    </div>
  )
}

export default PembayaranBerhasil