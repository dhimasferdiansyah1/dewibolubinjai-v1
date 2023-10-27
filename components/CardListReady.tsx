import data from "@/db.json";
import CardReady from "./CardReady";

const CardListReady = () => {
  return (
    <div className="m-4 gap-2 flex justify-center mx-auto">
      {data.bolureadyforeveryday.map((bolureadyforeveryday) => (
        <CardReady key={bolureadyforeveryday.id} {...bolureadyforeveryday} />
      ))}
    </div>
  );
};

export default CardListReady;
