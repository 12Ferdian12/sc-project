import React from "react";

function Product() {
  return (
    <section id="product" className="bg-Yellow  min-h-[750px]">
      <div className="px-10 pt-12">
        <h1 className="text-4xl border-b-4 w-full border-black font-bold">
          Tanaman Hidroponik
        </h1>
        <div className="flex">
          <div className="mt-5 text-Yellow bg-Brown2 border w-[700px] p-2 border-black rounded-lg">
            <h1 className="text-3xl font-bold">Description:</h1>
            <p className="py-6 font-medium w-[600px]">
              Mediahidroponik yang diinovasikan melalui pot dengan menanamkan
              bibit sawi pagoda. Desain konsep kemasan menggunakan board game
              yang di desain cara khusus. Keunggulan produk kami yaitu produk
              yang kami kemas berukuran kecil yang bisa menghemat ruang untuk
              tanaman hidroponik lainnya. Keunikan yang kami berikan yaitu
              desain kemasan yang berbentuk peti dan QR code yang tercantum di
              bagian samping box berisi langkah-langkah yang sudah tersusun,
              dioperasikan dengan cara scan lalu pasang alat dan bagian-bagian
              hidroponik lainnya melalui website yang sudah kami buat.
            </p>
          </div>
          <img
            className="ml-24 mt-5 border border-black rounded w-[700px] h-[400px]"
            src="./img/testing.jpeg"
            alt="Hybox"
          />
        </div>
      </div>
    </section>
  );
}

export default Product;
