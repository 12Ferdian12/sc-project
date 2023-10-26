"use client";

import { leagueSpartan } from "@/app/layout";
import React from "react";

function Product() {
  return (
    <section id="product" className="bg-Yellow  min-h-[750px]">
      {/* Laptop View */}
      <div data-aos="fade-right" className="hidden lg:block px-10 pt-12">
        <h1
          className={`${leagueSpartan.className} text-4xl border-b-4 w-full border-black font-bold`}
        >
          Tanaman Hidroponik
        </h1>
        <div className="flex">
          <div className="mt-5 text-Yellow bg-Brown2 border w-[700px] p-2 border-black rounded-lg">
            <h1 className="text-3xl font-bold">Description:</h1>
            <p className="text-xl py-7 font-medium w-[600px]">
              Hybox merupakan perangkat menanam yang dirancang khusus untuk
              mempermudah proses penanaman benih tumbuhan yang berukuran kecil
              sampai sedang sehingga dapat lebih efisien dan maksimal bagi
              mereka yang memiliki hobi menanam namun tidak memiliki lahan
              ataupun hanya memiliki lahan yang sangat terbatas
            </p>
          </div>
          <img
            className="ml-24 mt-5 border border-black rounded w-full h-[400px]"
            src="./img/testing.jpeg"
            alt="Hybox"
          />
        </div>
      </div>
      <div className="lg:hidden px-10 pt-12">
        <h1 className="text-4xl border-b-4 w-full border-black font-bold">
          Tanaman Hidroponik
        </h1>
        <div className="pt-5 text-Yellow ">
          <div className="py-5 px-5 bg-Brown2 border border-black rounded">
            <img
              className=" mx-auto w-full h-[150px]"
              src="./img/testing.jpeg"
              alt=""
            />
            <h1 className="pt-5 text-2xl border-b-2 border-Yellow font-bold">
              Description:
            </h1>
            <p>
              Mediahidroponik yang diinovasikan melalui pot dengan menanamkan
              bibit sawi pagoda. Desain konsep kemasan menggunakan board game
              yang di desain cara khusus. Keunggulan produk kami yaitu produk
              yang kami kemas berukuran kecil yang bisa menghemat ruang untuk
              tanaman hidroponik lainnya. Keunikan yang kami berikan yaitu
              desain kemasan yang berbentuk peti dan QR code yang tercantum di
              bagian samping box berisi langkah-langkah yang sudah tersusun,
              dioperasikan dengan cara scan lalu pasang alat dan bagian-bagian
              hidroponik lainnya melalui website yang sudah kami buat.s
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
