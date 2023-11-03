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
    image: "/img/testing.jpeg",
  },
  {
    title: "Pembasahan Rockwool & Pembenihan",
    description:
      "Basahi rockwool agar proses pembibitan dapat dilakukan tanpa menggunakan tanah. Lalu masukkan benih ke-dalam rockwool ",
    image: "/img/pembibitan.jpeg",
  },
  {
    title: "Penempatan Benih",
    description:
      "Masukkan benih yang sudah berada di dalam rockwool basah ke dalam ruangan yang gelap. Agar benih dapat menumbuhkan kecambah dengan baik",
    image: "path/to/image3.jpg",
  },
  {
    title: "Masa Semai",
    description:
      "Pindahkan benih  yang sudah muncul kecambah ke tempat yang terkena cahaya matahari, agar tanaman dapat memulai proses fotosintesis. Amati tanaman dan beri air yang dicampur nutrisi A dan B yang cukup selama 8 - 10 hari. ",
    image: "path/to/image4.jpg",
  },
  {
    title: "Proses Pendewasaan ",
    description:
      "Pindahkan tanaman ke HyBox, lalu tuangkan nutrisi A dan B ke dalam HyBox. Nutrisi tersebut merupakan pengganti mineral dari tanah, ini dapat membuat tanaman dapat ditanam dalam keadaan baik meskipun tanpa tanah. Amati dan rawat tanaman selama 4 - 14 hari.  ",
    image: "path/to/image5.jpg",
  },
  {
    title: "Masa Panen",
    description:
      "Cabutlah tanaman yang sudah tumbuh dewasa dari HyBox lalu bersihkan netpot agar dapat digunakan kembali. ",
    image: "path/to/image6.jpg",
  },
];
