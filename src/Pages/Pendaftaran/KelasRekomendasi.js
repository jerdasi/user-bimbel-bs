import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
import logo from '../../Assets/Images/logo.svg'
import {TbLocation} from 'react-icons/tb'

function KelasRekomendasi() {

    const [paket, setPaket] = useState([])
    const {state} = useLocation()
    const {id, id_jenjang, id_paket} = state;
    const navigate = useNavigate()
    const [selectPaket, setSelectPaket] = useState('')
    const [paketRekom, setPaketRekom] = useState({})
    const [pilihanPaket, setPilihanPaket] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/review-pendaftaran`, {state: {id: id, id_paket: selectPaket}})
    }

    useEffect(() => {
        console.log(id_paket)
        console.log(id_jenjang)
        axios
            .get(`${process.env.REACT_APP_API}/paket-bimbingan/${id_paket}`)
            .then((res) => setPaketRekom(res.data.data));

        axios
            .get(`${process.env.REACT_APP_API}/paket-bimbingan?jenjang=${id_jenjang}`)
            .then((res) => setPilihanPaket([...res.data.data]))

        axios
            .get(`${process.env.REACT_APP_API}/paket-bimbingan`)
            .then((res) => setPaket(res.data.data))
    }, [])
    return (
        <div className='p-16'>
            <div className='w-full  md:w-[70%]'>
                <h1 className='font-bold text-5xl'><span className='text-merah-bs'>Gabung</span> Bersama Kami dan
                    <span className='text-merah-bs'>Garansi 7 Hari* </span> Percobaan
                </h1>
                <p>Percayakan masa depan anak anda bersama kami. Ikuti masa percobaan selama 7 hari dan apabila merasa
                    tidak terbantu ajukan pengembalian dana</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Rekomendasi Kelas</h2>
                <p>Berdasarkan data yang kamu berikan, kami melakukan analisis untuk memberikan kamu rekomendasi paket bimbingan belajar agar kamu tidak bingung untuk memilih yah! Pilih atau Abaikan dan Tetap Semangat Belajar nya ya!
                </p>
                <div className='p-2 mr-14 rounded-md border-red-600 border-2 md:w-1/3 md:mr-14 py-14'>
                    <div className='flex justify-between py-2 gap-2'>
                        <img src={logo} className='px-2'/> <h2
                        className='text-lg md:text-md md:px-2 mx-auto font-bold'>{paketRekom.nama_paket}</h2>
                    </div>

                    <ul className=''>
                        <li>Kapasitas Kelas Hingga 20 Orang/pertemuan</li>
                        <li>Harga Terjangkau hanya Rp. {paketRekom.harga},-/bulan</li>
                        <li>Pertemuan {paketRekom.jumlah_pertemuan}x/minggu</li>
                        <li>Biaya Pendaftaran 1x untuk selamanya</li>
                    </ul>

                    <button
                        onClick={() => setSelectPaket(paketRekom.id)}
                        className={['w-full flex  p-2  px-6 justify-between items-center border-red-600 border-2 rounded-lg ', selectPaket === paketRekom.id ? 'bg-merah-bs text-white' : 'bg-white text-black'].join(" ")}>
                        <TbLocation/><span className='mx-auto'>Pilih Kelas Ini</span></button>
                </div>
            </div>
            <div className='w-full'>
                <h2 className='text-2xl py-4 font-bold'>Kelas Lainnya</h2>
                <div className='w-full flex overflow-x-auto'>
                    {pilihanPaket.map((item) => {
                        return (
                            <div key={item.id}
                                 className='w-full md:w-[1/3] p-2 border-2 rounded-md border-red-600 mx-2 cursor-pointer '>
                                <div className='flex justify-between py-2 gap-2'>
                                    <img src={logo} className='w-[60px]'/>
                                    <h4 className='text-sm font-bold py-2'> {item.nama_paket} </h4>
                                </div>
                                <ul className='text-sm'>
                                    <li>Kapasitas Kelas Hingga 20 Orang/pertemuan</li>
                                    <li>Harga Terjangkau hanya Rp. {item.harga},-/bulan</li>
                                    <li>Pertemuan {item.jumlah_pertemuan}x/minggu</li>
                                    <li>Biaya Pendaftaran 1x untuk selamanya</li>
                                </ul>
                                <button
                                    onClick={() => setSelectPaket(item.id)}
                                    className={['w-full flex  p-2  px-6 justify-between items-center border-red-600 border-2 rounded-lg ', selectPaket === item.id ? 'bg-merah-bs text-white' : 'bg-white text-black'].join(" ")}>
                                    <TbLocation/><span className='mx-auto'>Pilih Kelas Ini</span></button>
                            </div>
                        )
                    })}
                    {/* {paket.map((item) => {
                        return (
                            <div key={item.id}
                                className='w-[500px] px-8 border-2 rounded-md border-red-600 mx-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                                <div className='flex justify-between py-2'>
                                    <img src={logo} className='w-[60px]' />
                                    <h4 className='text-sm font-bold py-2'> {item.nama_paket} </h4>
                                </div>

                                <p> {item.deskripsi} </p>
                                <ul className='text-sm'>
                                    <li>{item.deskripsi}</li>
                                    <li>{item.jumlah_pertemuan}</li>
                                    <li>{item.harga}</li>
                                </ul>
                                <button className='w-full flex mt-1 p-2  px-6 justify-between items-center text-white font-bold bg-merah-bs rounded-md'><TbLocation />Pilih Kelas Ini</button>
                            </div>
                        )
                    })}  */}
                </div>
            </div>
            <div>
                <button
                    onClick={handleClick}
                    className='p-2 mt-4 w-full bg-merah-bs text-white font-bold md:text-lg rounded-md my-2'>Lanjutkan Pendaftaran
                </button>
            </div>
        </div>
    )
}

export default KelasRekomendasi