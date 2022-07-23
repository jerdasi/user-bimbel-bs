import React, { useState, useEffect } from "react";
import hero from "../Assets/Images/hero.png";
import whyus from "../Assets/Images/whyus.png";
import insignia from "../Assets/Images/insignia.png";
import book from "../Assets/Images/book.svg";
import whyusjson from "../Components/json/whyus.json";
// import testimoni from "../Components/json/testimoni.json";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";

function LandingPage() {
    const [jenjang, setJenjang] = useState([]);
    const [testimoni, setTestimoni] = useState([]);
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/jenjang-pendidikan`)
            .then((res) => setJenjang(res.data.data));
        axios.get(`${process.env.REACT_APP_API}/testimoni`).then((res) => {
            setTestimoni(res.data.data);
        });
    }, []);

    const toPaketBimbingan = () => {
        navigate("/paket-bimbingan");
    };

    return (
        <>
            <div className="w-full p-16 md:p-16 mx-auto bg-white">
                <div className="grid md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-merah-bs font-bold text-4xl py-2 md:text-5xl sm:py-1">
                            Beta Smart
                        </h1>
                        <h3 className="font-bold text-2xl text-merah-bs pb-2 md:text-3xl">
                            Quality{" "}
                            <span className="text-black">More Than </span>{" "}
                            Quantity
                        </h3>
                        <p className="text-justify my-4">
                            Merupakan Bimbingan Belajar berbasis Private atau
                            Reguler yang berdiri di Berau, Kalimantan Timur
                            sejak 27 Agustus 2016. Dengan metode pembelajaran{" "}
                            <span className="text-merah-bs">
                                “DARE TO GREAT”
                            </span>{" "}
                            oleh pengajar pengajar profesional yang menghasilkan
                            siswa-siswa optimis, cerdas dan berprestasi. Ayo
                            pilih kelasmu atau gunakan fitur rekomendasi untuk
                            memudahkan menemukan kelas yang tepat.
                        </p>
                        <div className="md:flex md:gap-2">
                            <a href="#pilih_kelas" className="w-full">
                                <button className="w-full p-2 bg-merah-bs rounded-md text-white mx-1 mb-1 md:mb-0 border-2 border-merah-bs hover:border-black">
                                    Pilih Kelas
                                </button>
                            </a>

                            <Link
                                to="/paket-bimbingan"
                                className="text-black no-underline hover:text-white w-full"
                            >
                                <button className="w-full p-2 rounded-md border-2 border-red-600 mx-1 text-merah-bs hover:bg-merah-bs hover:text-white">
                                    Rekomendasi Kelas
                                </button>
                            </Link>
                        </div>
                    </div>
                    <img src={hero} className="px-2 mx-auto" />
                </div>
            </div>
            <div
                className="w-full p-4 md:px-10 md:py-16 mx-auto bg-antique"
                id="pilih_kelas"
            >
                <h1 className="font-bold text-3xl">Daftar dan Mulai Belajar</h1>
                <p className="pb-2">
                    Pilih sendiri atau ikuti rekomendasi kami
                </p>
                <div className="w-full overflow-x-auto h-56">
                    <div className="w-full h-[90%] flex flex-col flex-wrap gap-2 justify-start overflow-x-auto ">
                        <div
                            className="w-1/2 md:w-1/6 h-full border-2 text-center border-gray-900 rounded-md items-center cursor-pointer hover:scale-x-105 ease-in-out duration-300 justify-center bg-white relative group"
                            onClick={toPaketBimbingan}
                        >
                            <img
                                src={insignia}
                                className="w-[90px] mx-auto pt-4"
                            />
                            <div className="absolute bottom-0 left-0 group-hover:bg-merah-bs group-hover:text-white w-full p-2 flex items-center justify-center rounded-b-md">
                                <h4 className="text-sm">Rekomendasi</h4>
                            </div>
                        </div>
                        {jenjang.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="w-1/2 md:w-1/6 h-full border-2 text-center border-gray-900 rounded-md items-center cursor-pointer hover:scale-x-105 ease-in-out duration-300 justify-center bg-white relative group"
                                    onClick={toPaketBimbingan}
                                >
                                    <img
                                        src={book}
                                        className="w-[90px] mx-auto pt-4"
                                    />
                                    <div className="absolute bottom-0 left-0 group-hover:bg-merah-bs group-hover:text-white w-full p-2 flex items-center justify-center rounded-b-md">
                                        <h4 className="text-sm">
                                            {item.nama_jenjang}
                                        </h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 md:px-10 md:py-16 mx-auto">
                <h1 className="font-bold text-3xl text-center py-4">
                    Kenapa Harus Bimbel{" "}
                    <span className="text-merah-bs">Beta Smart</span> ?
                </h1>
                <div className=" mx-auto grid md:grid-cols-2">
                    <img src={whyus}></img>
                    <div>
                        <p className="text-center">
                            Beta Smart sebagai penyedia jasa bimbingan belajar,
                            menawarkan beberapa keuntungan yang dapat membantu
                            anak didik dapat belajar dengan baik dan menjadi
                            siswa berprestasi di sekolahnya
                        </p>
                        <div className="flex gap-2">
                            <div className="">
                                {whyusjson
                                    .filter((item) => item.id < 4)
                                    .map((item) => {
                                        return (
                                            <div className="w-full border-2 border-red-500 rounded-md my-2  bg-merah-bs items-center gap-2">
                                                <div className="py-1 px-2 text-white">
                                                    <h3 className="text-sm md:text-sm">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <div className="bg-white p-2 rounded-sm h-[210px] md:h-[150px] text-sm">
                                                    {item.res}
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                            <div className="">
                                {whyusjson
                                    .filter((item) => item.id > 3)
                                    .map((item) => {
                                        return (
                                            <div className="w-full border-2 border-red-500 rounded-md my-2  bg-merah-bs items-center ">
                                                <div className="py-1 px-2 text-white ">
                                                    <h3 className="text-sm md:text-sm">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <div className="bg-white p-2 rounded-sm h-[210px] md:h-[150px] text-sm">
                                                    {item.res}
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 md:px-10 md:py-16 mx-auto bg-antique">
                <h1 className="text-3xl font-bold">Kisah Sukses </h1>
                <p>
                    Bergabung dengan Beta Smart bukan pilihan yang salah. Ikuti
                    jejak mereka!
                </p>
                <div className="md:flex">
                    {testimoni.map((item, index) => {
                        return (
                            <div className="w-1/2 lg:w-1/3 bg-white p-4 my-2 rounded-md mr-2">
                                <img
                                    src={`${process.env.REACT_APP_API}/${item.foto}`}
                                    className="mx-auto w-24 h-auto"
                                />
                                <h1 className="text-xl font-bold text-center">
                                    {item.nama} - {item.nama_paket}
                                </h1>
                                <p className="text-left">{item.deskripsi}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="flex gap-4">
                    <BsArrowLeft size={30} />
                    <BsArrowRight size={30} />
                </div>
            </div>
        </>
    );
}

export default LandingPage;
