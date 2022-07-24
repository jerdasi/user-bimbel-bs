import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Testimoni = () => {
    const [testimoni, setTestimoni] = useState([])
    const [jenjang, setJenjang] = useState([])
    const [paket, setPaket] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/testimoni`)
        .then((res) => setTestimoni(res.data.data))

        axios.get(`${process.env.REACT_APP_API}/jenjang-pendidikan`)
        .then((res) => setJenjang(res.data.data))

        axios.get(`${process.env.REACT_APP_API}/paket-bimbingan`)
        .then((res) => setPaket(res.data.data))
    }, []);
    return (
        <div className='p-4 '>
            <div className="header-page">
                <h1 className="text-3xl text-merah-bs font-bold">Testimoni</h1>
                <p>Hai kamu! Masih ragu join bersama kami? Yuk Baca testimoni dari mereka yaa!</p>
            </div>
            <div className="body-page mt-4">
                <div className="pilih-jenjang flex gap-2">
                    <select name="jenjang-pendidikan" id="jenjang-pendidikan" className='p-2 border border-abu-bs rounded-md w-1/2'>
                        <option>Semua Jenjang Pendidikan</option>
                        {jenjang.length == 0? (<option disabled selected>Tidak Ada Jenjang Pendidikan</option>) : (jenjang.map(item => (
                            <option value={item.id}>{`${item.nama_jenjang}-${item.akronim}`}</option>
                        )))}
                    </select>
                    <button className='bg-merah-bs text-white p-2 rounded-md w-1/2'>Cari</button>
                </div>
            </div>
        </div>
    );
}

export default Testimoni;
