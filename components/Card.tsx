"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

type dataProps = {
  id: number;
  nama: string;
  gambar: string;
  harga: number;
  deskripsi: string;
};

const Card = ({ id, nama, gambar, harga, deskripsi }: dataProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.classList.add("card");
    }
  }, []);

  return (
    <div className="hover:scale-105 hover:duration-300 duration-300">
      <div
        ref={cardRef}
        className="flex flex-col bg-white shadow-lg w-80 h-auto rounded-lg"
      >
        <img
          className="w-96 h-72 rounded-t-md object-cover"
          src={gambar}
          alt="Image Description"
          height={512}
          width={512}
        />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-slate-800">{nama}</h3>
          <p className="mt-1 text-slate-500 ">{deskripsi}</p>
          <p className="mt-1 text-green-600 font-bold">Rp. {harga}</p>
          <Link
            href={`https://wa.me/6282285714607?text=Ingin%20mengajukan%20Pesanan%0A---------------------------------%0A%0ANama%20Bolu%20:%20${nama}%0AHarga%20:%20${harga}%0ATanggal%20:%20${new Date().toLocaleDateString()}%0A%0ANama%20Pemesan%20:%20%0AAlamat%20:%20`}
            className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#BEADFA] text-gray-600 hover:bg-[#F875AA] focus:outline-none focus:ring-2 focus:ring-[#F875AA] focus:ring-offset-2 transition-all text-sm "
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
