import Hybox from "@/layout/Tutorial/HyboxTutor";

interface hybox {
  title: string;
  description: string;
  image: string;
}

export const HyboxList: hybox[] = [
  {
    title: "Persiapan",
    description: `Siapkan alat dan bahan: 
      <br>-Rockwool <br>-Benih Sawi Pakcoy <br>-Air <br>-Wadah <br>-Kit Hybox .`,
    image: "/img/Persiapan.jpeg",
  },
  {
    title: "Pembasahan Rockwool & Pembenihan",
    description:
      "Basahi Rockwool dengan sedikit air agar proses pembibitan dapat dilakukan dengan lebih mudah. Lalu, beri lubang kecil di tengah Rockwool dan masukkan benih kedalamnya      ",
    image: "/img/pembibitan.jpeg",
  },
  {
    title: "Penempatan Benih",
    description:
      "Setalah itu taruh Rockwool yang berisi benih di ruangan atau tempat yang gelap dan lembab, agar benih dapat menumbuhkan kecambah. Simpan dalam ruangan atau tempat itu selama 24 jam.",
    image: "path/to/image3.jpg",
  },
  {
    title: "Masa Semai",
    description:
      "Setelah itu, pindahkan benih yang sudah tumbuh kecambah ke tempat yang terkena sinar matahari. Pastikan Rockwool tetap basah tapi tidak menggenang airnya",
    image: "/img/pertumbuhan2.jpeg",
  },
  {
    title: "Proses Pendewasaan ",
    description:
      "Setelah tanaman tumbuh daun sejati (daun ke 4), siapkan pot HyBox dengan sedikit air (disarankan air AC) dan campurkan sedikit pupuk A dan B kedalamnya. Pupuk tersebut berperan sebagai pengganti mineral dari tanah. Setelah itu letakkan Rockwool yang berisi tanaman ke dalam netpot HyBox, tunggu selama paling lama 14 hari. Jangan lupa, setiap harinya untuk mengaduk air yang ada di dalam pot agar nutrisi tidak mengendap di bawah.  ",
    image: "/img/proses-masa-dewasa.jpeg",
  },
  {
    title: "Masa Panen",
    description:
      "Jika sudah panen, potong tanaman lalu bersihkan netpot dari HyBox. Setelah itu kalian bisa menanam lagi dengan bibit dan Rockwool yang disediakan oleh Hybox ",
    image: "path/to/image6.jpg",
  },
];
