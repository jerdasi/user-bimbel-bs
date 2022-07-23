import React, { useState, useEffect } from "react";
import axios from "axios";
import insignia from "../Assets/Images/insignia.png";
import book from "../Assets/Images/book.svg";
import FormRegistManual from "./Pendaftaran/FormRegistManual";
import FormRegistRekomendasi from "./Pendaftaran/FormRegistRekomendasi";

function PaketBimbingan() {
    const [jenjang, setJenjang] = useState([]);
    const [selected, setSelected] = useState(0);
    const [title, setTitle] = useState("");
    const [akro, setAkro] = useState("");
    const [kelas, setKelas] = useState("");

    const _handleSelected = (item) => {
        setSelected(item.akronim);
        setTitle(item.nama_jenjang);
        setAkro(item.akronim);
        setKelas(item.id);
    };

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/jenjang-pendidikan`)
            .then((res) => setJenjang(res.data.data));
    }, []);

    return (
        <div className="w-full p-4 md:px-16 py-12">
            <div className="w-full mb-8">
                <h1 className="font-bold text-3xl md:text-5xl">
                    <span className="text-merah-bs">Gabung</span> Bersama Kami
                    dan <span className="text-merah-bs">Garansi 7 Hari* </span>{" "}
                    Percobaan
                </h1>
                <p className="text-sm">
                    Percayakan masa depan anak anda bersama kami. Ikuti masa
                    percobaan selama 7 hari dan apabila merasa tidak terbantu
                    ajukan pengembalian dana
                </p>
            </div>
            <div className="w-full">
                <h3 className="text-lg md:text-3xl font-bold">
                    <span className="text-merah-bs">Pilih</span> atau{" "}
                    <span className="text-merah-bs"> coba </span> rekomendasi
                    kami untuk anak anda
                </h3>

                <div className="w-full overflow-x-auto h-56">
                    <div className="w-full h-[90%] flex flex-col flex-wrap gap-2 justify-start overflow-x-auto ">
                        <div
                            className="w-1/2 md:w-1/6 h-full border-2 text-center border-gray-900 rounded-md items-center cursor-pointer hover:scale-x-105 ease-in-out duration-300 justify-center bg-white relative group"
                            onClick={() => {
                                setSelected(0);
                                _handleSelected();
                            }}
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
                                    onClick={(e) => {
                                        setSelected(parseInt(item.id));
                                        _handleSelected(item);
                                    }}
                                    className={[
                                        "w-1/2 md:w-1/6 h-full border-2 text-center border-gray-900 rounded-md items-center cursor-pointer hover:scale-x-105 ease-in-out duration-300 justify-center bg-white relative group",
                                        selected == item.id
                                            ? "scale-x-105"
                                            : "",
                                    ].join(" ")}
                                >
                                    <img
                                        src={book}
                                        className="w-[90px] mx-auto pt-4"
                                    />
                                    <div
                                        className={[
                                            "absolute bottom-0 left-0 group-hover:bg-merah-bs group-hover:text-white w-full p-2 flex items-center justify-center rounded-b-md",
                                            selected == item.id
                                                ? "bg-merah-bs text-white"
                                                : "",
                                        ].join(" ")}
                                    >
                                        <h4 className="text-sm">
                                            {item.nama_jenjang}
                                        </h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Slider */}
            </div>
            <div>
                {selected === 0 && <FormRegistRekomendasi />}
                {selected != 0 && (
                    <FormRegistManual title={title} akro={akro} kelas={kelas} />
                )}
            </div>
        </div>
    );
}

export default PaketBimbingan;
