import CardList from "@/components/CardList";
import DigitalClock from "@/components/DigitalClock";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto container">
      <div className="flex flex-col font-bold justify-center">
        <div className="text-center text-xl mt-8 md:mt-0 text-slate-500 mb-4">
          <div className="grid grid-cols-2 items-center">
            <p>Produk Pilihan</p>
            <div>
              <DigitalClock />
            </div>
          </div>
        </div>

        <div className="flex-wrap gap-6 flex justify-center">
          <CardList />
        </div>
      </div>
    </div>
  );
}
