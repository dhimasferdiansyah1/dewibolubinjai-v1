import Card from "./Card";
import data from "@/db.json";

const CardList = () => {
  return (
    <div className="m-4 gap-8 grid md:grid-cols-2 lg:grid-cols-3 mx-auto">
      {data.bolupilihan.map((bolupilihan) => (
        <Card key={bolupilihan.id} {...bolupilihan} />
      ))}
    </div>
  );
};

export default CardList;
