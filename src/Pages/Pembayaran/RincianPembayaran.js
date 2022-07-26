import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import logo from '../../Assets/Images/logo.svg'

function RincianPembayaran() {
    const { state } = useLocation()
    const { id_paket, id_grup, redirectUrl} = state
    const [rincian, setRincian] = useState({})
    const [pembayaran, setPembayaran] = useState({})

    useEffect(() => {
        axios   
            .get(`${process.env.REACT_APP_API}/paket-bimbingan/${id_paket}`)
            .then((res) => setRincian(res.data.data))
        
        axios
            .get(`${process.env.REACT_APP_API}/pendaftaran`)
            .then((res) => setPembayaran(res.data.data))

    }, [])

    return (
        <div>
            <div className='p-4 md:p-16 pr-0 bg-white'>
                <h1 className='text-5xl font-bold text-merah-bs'>Rincian Pembayaran</h1>
                <p className='text-xl'>Ayo pastikan terlebih dahulu data yang telah diisi, agar informasi nya valid yah!</p>


                <div className='md:flex md:items-center md:h-[50vh] mt-4'>
                    <div className='h-full p-2 mr-14 rounded-md border border-black md:w-3/4 md:mr-14'>
                        <div className='flex justify-between py-4'>
                            <img src={logo} className='px-2' /> 
                            <h2 className='text-md md:text-xl font-bold mx-auto'>{rincian.nama_paket}</h2>
                        </div>

                        <p className='px-4 py-6 md:text-xl'>{rincian.deskripsi}</p>
                        <ul className='pb-6 px-4'>
                            <li className='md:text-xl py-2'>Kapasitas Kelas Hingga 10 Orang/pertemuan</li>
                            <li className='md:text-xl py-2'>Harga Terjangkau hanya Rp. {rincian.harga},-/bulan</li>
                            <li className='md:text-xl  py-2'>Pertemuan {rincian.jumlah_pertemuan}x/minggu</li>
                            <li className='md:text-xl py-2'>Biaya Pendaftaran 1x untuk selamanya</li>
                        </ul>
                    </div>

                    <div className='pt-8 w-full'>
                        <div className='mb-12 pb-8 '>
                            <h4 className='text-xl md:text-xl py-2'>Pembayaran : <span className='font-bold text-merah-bs'>1 Bulan</span></h4>
                            <h4 className='text-xl md:text-xl py-2'>Biaya Paket Bimbingan/Bulan : <span className='font-bold text-merah-bs'>Rp. {rincian.harga},-</span></h4>
                            <h4 className='text-xl md:text-xl py-2'>Biaya Pendaftaran :<span className='font-bold text-merah-bs'> Rp. 200000,-</span></h4>
                            <h4 className='text-xl md:text-xl py-2'>Total : <span className='font-bold text-merah-bs'>Rp. {rincian.harga + 200000} ,-</span></h4>

                        </div>
                        <div className='pt-8 mt-8 md:mt-16 md:mr-16'>
                            <button 
                            onClick={() => {
                                window.location.assign(redirectUrl)
                                // window.open(redirectUrl)
                            }}
                            className='p-2 md:p-4 w-full bg-merah-bs md:text-lg text-white font-bold  rounded-md my-2 md:mt-8 '>Bayar Sekarang</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RincianPembayaran