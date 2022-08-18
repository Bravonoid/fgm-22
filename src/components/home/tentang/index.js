import { Card } from "./card";
import { useState } from "react";

const cardName = [
  { name: "Teater", img: "teater.png", url: "" },
  { name: "Festival Seni", img: "festivalseni.png", url: "" },
  {
    name: "Pasar Rakyat",
    img: "pasarrakyat.png",
  },

];

export default function Cards() {
  const [hovered, setHovered] = useState(8);

  function handleHovered(id) {
    setHovered(id);
  }

  return (
    <>
      {cardName.map((cards, id) => {
        return (
          <Card
            id={id}
            onMouseEnter={() => handleHovered(id)}
            onMouseLeave={() => handleHovered(8)}
            hovered={hovered}
            url={cards.url}
            image={cards.img}
          >
            <span>{cards.name}</span>
            <div className="inline-block bg-black w-32 h-5">

            </div>
          </Card>
        );
      })}
    </>
  );
}
