import Hybox from "@/layout/Tutorial/HyboxTutor";

interface hybox {
  title: string;
  description: string;
  image: string;
}

export const HyboxList: hybox[] = [
  {
    title: "Langkah 1",
    description: "Siapkan alat dan bahan.",
    image: "/img/testing.jpeg",
  },
  {
    title: "Langkah 2",
    description: "Buat larutan nutrisi hidroponik.",
    image: "path/to/image2.jpg",
  },
  {
    title: "Langkah 3",
    description: "Siapkan media tanam.",
    image: "path/to/image3.jpg",
  },
  {
    title: "Langkah 4",
    description: "Tanam bibit.",
    image: "path/to/image4.jpg",
  },
  {
    title: "Langkah 5",
    description: "Siram dengan larutan nutrisi.",
    image: "path/to/image5.jpg",
  },
  {
    title: "Langkah 6",
    description: "Pantau pertumbuhan tanaman.",
    image: "path/to/image6.jpg",
  },
];
