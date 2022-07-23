import axios from 'axios'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
import { set } from 'react-hook-form'
import { BsSearch } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import insignia from '../../Assets/Images/insignia.png'
import logo from '../../Assets/Images/logo.svg'
import { TbLocation } from 'react-icons/tb'

function ReviewPendaftaran() {
  const { state } = useLocation()
  const { id, id_paket } = state;
  const [review, setReview] = useState({})
  const [paket, setPaket] = useState([])
  const [grup, setGrup] = useState([])
  const [idGrup, setIdGrup] = useState('')
  const navigate = useNavigate()
  const [cek, setCek] = useState('')
  const [pendaftaran, setPendaftaran] = useState({
    id_siswa: id,
    id_grup: 0,
    total_pembayaran: 200000,
    tanggal_pendaftaran: new Date()
  })
  const [jadwalGrup, setJadwalGrup] = useState([])
  const [hariJam, setHariJam] = useState([])

  const handleDaftar = (e) => {
    e.preventDefault()
    if (pendaftaran.id_grup === 0) {
      swal("Tunggu dulu,", "Kamu belum pilih grup nih!", "info");
    } else if (cek !== 'setuju') {
      swal("Ets, bentar dong", "Kamu belum cek dan setuju nih!", "info")
    } else {
      axios
        .post(`${process.env.REACT_APP_API}/pendaftaran/pendaftaran-midtrans`, pendaftaran)
        .then((res) => {
          navigate(`/rincian-pembayaran`, { state: { id_paket: id_paket, id_grup: idGrup, redirectUrl: res.data.data.redirectUrl } })
        })
    }

  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/peserta-didik/${id}`)
      .then((res) => setReview(res.data.data))

    axios
      .get(`${process.env.REACT_APP_API}/paket-bimbingan/${id_paket}`)
      .then((res) => {
        console.log(res.data.data.harga)
        setPendaftaran({ ...pendaftaran, total_pembayaran: res.data.data.harga + pendaftaran.total_pembayaran })
        setPaket(res.data.data)
      })

    axios
      .get(`${process.env.REACT_APP_API}/grup-bimbel`)
      .then((res) => setGrup(res.data.data))
    console.log(id, id_paket)
    axios.get(`${process.env.REACT_APP_API}/jadwal-grup`).then(res => setJadwalGrup(res.data.data))
    axios.get(`${process.env.REACT_APP_API}/hari-jam`).then(res => setHariJam(res.data.data))
  }, [])
  return (
    <div className='p-16'>

      <h1 className='text-2xl md:text-5xl font-bold'><span className='text-merah-bs'>Review</span> Pendaftaran</h1>
      <p>Ayo pastikan terlebih dahulu data yang telah diisi, agar informasi nya valid yah!</p>

      <h3 className='text-3xl font-bold py-4'>Informasi Calon Peserta Didik</h3>
      <div className='w-full md:flex justify-start'>
        <div className='w-1/3 p-2 border-2 border-red-600 rounded-md max-h-72'>
          <img src={`${process.env.REACT_APP_API}/${review.foto}`} className='p-2 md:w-[210px] md:h-[220px]  mx-auto' />
          <button className='flex  p-2 w-full bg-merah-bs text-white md:text-lg rounded-md my-2'><BsSearch size={20} className='my-1' /> <span className='mx-auto'>Preview</span></button>

        </div>
        <div className='px-16'>
          <div>
            <h5 className='text-lg'>Nama Lengkap</h5>
            <span className='font-light'>{review.nama}</span>
          </div>
          <div>
            <h5 className='text-lg'>Tempat, Tanggal Lahir</h5>
            <span className='font-light'>{review.tempat} {review.tanggal_siswa}</span>
          </div>
          <div>
            <h5 className='text-lg'>Alamat</h5>
            <span className='font-light'>{review.alamat}</span>
          </div>
          <div>
            <h5 className='text-lg'>Asal Sekolah</h5>
            <span className='font-light'>{review.asal_sekolah}</span>
          </div>
          <div>
            <h5 className='text-lg'>Nama Ayah</h5>
            <span className='font-light'>{review.nama_ayah}</span>
          </div>
          <div>
            <h5 className='text-lg'>Nama Ibu</h5>
            <span className='font-light'>{review.nama_ibu}</span>
          </div>
          <div>
            <h5 className='text-lg'>Telepon Ayah</h5>
            <span className='font-light'>{review.telepon_ayah}</span>
          </div>
          <div>
            <h5 className='text-lg'>Telepon Ibu</h5>
            <span className='font-light'>{review.telepon_ibu}</span>
          </div>
          <div>
            <h5 className='text-lg'>Telepon Anak</h5>
            <span className='font-light'>{review.telepon_anak}</span>
          </div>
        </div>

      </div>

      <div>
        <h3 className='font-bold py-2 text-xl md:text-2xl'>Paket yang <span className='text-merah-bs'>dipilih</span></h3>
        <div className='p-2 mr-14 rounded-md border-red-600 border-2 w-full md:w-1/3 md:mr-14 pb-14 h-[350px]' >
          <div className='flex justify-between md:pt-8 pb-6'>
            <img src={logo} className='px-2' /> <h2 className='text-md md:text-lg md:px-2 mx-auto'>{paket.nama_paket}</h2>
          </div>

          <p className='p-2 text-md'>{paket.deskripsi}</p>
          <ul className=''>
            <li>Kapasitas Kelas Hingga 20 Orang/pertemuan</li>
            <li>Harga Terjangkau hanya Rp. {paket.harga},-/bulan</li>
            <li>Pertemuan {paket.jumlah_pertemuan}x/minggu</li>
            <li>Biaya Pendaftaran 1x untuk selamanya</li>
          </ul>
        </div>

        <div className='py-6'>
          <h2 className='font-bold text-xl md:text-2xl'>Pilihan <span className='text-merah-bs'>Grup Bimbingan </span></h2>
          <div className='flex gap-2'>
            {grup.filter(item => item.id_paket === id_paket).map((item) => {
              return (
                <div
                  key={item.id}
                  className='rounded-md border-2 border-red-600 p-4 w-full md:w-1/3 cursor-pointer'>
                  <div className='flex justify-between'>
                    <img src={logo} /> <h2 className='text-sm md:text-lg mx-auto'>Grup Bimbingan</h2>
                  </div>
                  <div className='block py-2'><p className='px-1'>Nama Grup : {item.nama_grup}
                    <p> Kuota : {item.kuota}</p></p>
                  </div>
                  <div>
                    <p className="font-bold">Jadwal : {jadwalGrup.filter(jg => jg.id_grup == item.id ).map(jg => `${hariJam.filter(hj => hj.id == jg.id_hari_jam)[0]?.nama_hari}/${hariJam.filter(hj => hj.id == jg.id_hari_jam)[0]?.nama_rentang}, `)}</p> 
                  </div>
                  <button
                    onClick={() => {
                      setPendaftaran({
                        ...pendaftaran,
                        id_grup: item.id
                      })
  
                      console.log(item.id)
                    }}
                    className={['w-full flex  p-2  px-6 justify-between items-center border-red-600 border-2 rounded-lg', item.id === pendaftaran.id_grup ? 'bg-merah-bs text-white' : 'bg-white text-black'].join(" ")}><TbLocation /><span className='mx-auto'>Pilih Gup Ini</span></button>
                </div>
              )

            })}
          </div>

        </div>

        <div>
          <input type='checkbox'
            name='setuju'
            onChange={() => setCek('setuju')}
          />Saya setuju untuk mengikuti segala aturan dan ketentuan yang berlaku di Bimbingan Belajar Beta Smart
          <div className='flex gap-2'>
            <button className='w-1/2  mt-1 p-2  px-6 justify-between items-center border-2 border-gray-600 font-bold rounded-md' onClick={(e) => {
              navigate("/paket-bimbingan")
            }}>Kembali</button>
            <button
              onClick={(e) => handleDaftar(e)}
              className='w-1/2 mt-1 p-2  px-6 justify-between items-center text-white font-bold bg-merah-bs rounded-md'>Lanjutkan dan Bayar </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ReviewPendaftaran