import CardListPilihan from "@/components/CardListPilihan";
import CardListReady from "@/components/CardListReady";
import DigitalClock from "@/components/DigitalClock";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto container">
      <div className="flex flex-col font-bold justify-center">
        <div className="text-center text-xl mt-8 md:mt-0 text-slate-500 mb-4">
          <div className="flex justify-center items-center">
            <div>
              <DigitalClock />
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <div>Ready For Everyday</div>
        </div>
        <div className="flex gap-2 mx-2 justify-center flex-warp">
          <CardListReady />
        </div>
        <div className="flex justify-center mt-6">
          <div>Produk Pilihan</div>
        </div>
        <div className="flex-wrap gap-6 mt-4 flex justify-center">
          <CardListPilihan />
        </div>
      </div>
    </div>
  );
}
