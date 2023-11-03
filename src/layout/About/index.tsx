"use client";

import React, { useState } from "react";
import { leagueSpartan } from "@/app/layout";

function About() {
  const [stateAbout, setStateAbout] = useState("ferdi");

  return (
    <section
      id="about"
      className="bg-Semen border-t-4 border-black py-10 lg:min-h-[700px]"
    >
      <div className="flex-col-reverse flex w-full lg:flex-row">
        <div className="flex-col px-10 pt-12 w-full lg:w-1/2">
          <h1
            className={`${leagueSpartan.className} text-4xl mb-2 font-bold border-b-4 border-black`}
          >
            About
          </h1>
          <div className="flex text-2xl font-semibold h-10 mb-2 space-x-3 ">
            <div className="border-b-4 rounded border-Brown2">
              <button onClick={() => setStateAbout("ferdi")}>
                <p className="flex justify-center items-center border-Green border-b-[4px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  ">
                  Olativity?
                </p>
              </button>
            </div>
            <div className="border-b-4 rounded border-Brown2">
              <button onClick={() => setStateAbout("ganteng")}>
                <p className="flex justify-center items-center border-Green border-b-[4px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                  History
                </p>
              </button>
            </div>
            <div className="border-b-4 rounded border-Brown2">
              <button onClick={() => setStateAbout("Banget")}>
                <p className="flex justify-center items-center border-Green border-b-[4px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  ">
                  Problems
                </p>
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="border-2 bg-black w-[15px] h-[15px] border-black rounded-full"></div>
            <div className="my-auto h-[5px] bg-black w-[600px]"></div>
          </div>
          <div className="flex h-[300px]">
            <p className="container text-2xl font-semibold mt-2 text-ellipsis overflow-hidden">
              {stateAbout === "ferdi"
                ? ferdi()
                : stateAbout === "ganteng"
                ? ganteng()
                : banget()}
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            className=" w-[500px] h-[500px]"
            src="./img/SC.png"
            alt="Ferdi Guanteng"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

function ferdi() {
  return <>P BALAP</>;
}

function ganteng() {
  return (
    <>
      OLATIVITY Student Company merupakan perusahaan siswa yang berasal dari
      sekolah SMA Negeri 2 Surabaya, terletak pada Jl. Wijaya Kusuma No. 48,
      Ketabang. Kec. Genteng, Kota Surabaya, Jawa Timur. Perusahaan siswa ini di
      bentuk pada hari Jumat, tanggal 25 bulan Agustus, 2023 hasil kerja sama
      antara sekolah dengan Prestasi Junior indonesia dan disponsori oleh Zurich
      Foundation, dengan tujuan utama perusahaan OLATIVITY yang ingin mendukung
      penuh kegiatan peduli lingkungan agar dapat membuat bumi kita nyaman dan
      aman untuk di tinggali dengan menciptakan inovasi yang bermanfaat.
    </>
  );
}

function banget() {
  return (
    <>
      jumlah petani di Indonesia terus berkurang meskipun dikenal sebagai negara
      agraris. Seperti contohnya petani Jawa Barat yang paling banyak berada di
      rentan usia 45 - 49 tahun yaitu sebanyak 36,30%. Sementara, petani berusia
      30 - 44 hanya 24,06%. Menurunnya minat petani disebabkan karena generasi
      muda tidak melihat adanya potensi pada sektor pertanian. Hal ini membuat
      kami sadar untuk melakukan tindakan dan mencegah menurunnya petani -
      petani muda di Indonesia
    </>
  );
}
