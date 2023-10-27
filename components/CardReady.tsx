"use client";
import data from "@/db.json";

import Link from "next/link";
import { useEffect, useRef } from "react";

type dataProps = {
  id: number;
  nama: string;
  gambar: string;
  harga: number;
  deskripsi: string;
};

const CardReady = ({ id, nama, gambar, harga, deskripsi }: dataProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.classList.add("card");
    }
  }, []);

  return (
    <div className="hover:scale-105 hover:duration-300 duration-300 gap-4">
      <div
        ref={cardRef}
        className="flex flex-col bg-white shadow-lg rounded-lg h-full w-auto md:w-80  justify-center"
      >
        <img
          className="w-full h-44 md:h-72 rounded-t-md object-cover"
          src={gambar}
          alt="Image Description"
        />
        <div className="p-4 md:p-5 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-bold text-slate-800">{nama}</h3>
            <p className="mt-2 text-slate-500 ">{deskripsi}</p>
            <p className="mt-2 text-green-600 font-bold">Rp. {harga}</p>
          </div>
          <div className="mt-4">
            <Link
              href={`https://wa.me/6282285714607?text=Ingin%20mengajukan%20Pesanan%0A---------------------------------%0A%0ANama%20Bolu%20:%20${nama}%0AHarga%20:%20${harga}%0ATanggal%20:%20${new Date().toLocaleDateString()}%0A%0ANama%20Pemesan%20:%20%0AAlamat%20:%20`}
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#BEADFA] text-gray-600 hover:bg-[#F875AA] focus:outline-none focus:ring-2 focus:ring-[#F875AA] focus:ring-offset-2 transition-all text-sm "
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReady;
