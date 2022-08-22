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


  const color = (id) => {
    switch (id) {
      case 0:
        return "#E62C20";
      case 1:
        return "#9C4A9A";
      case 2:
        return "#F69722";
        case 3:
        return "#E62C20";
    
      default:
        break;
    }
  };
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
            <div className={`inline-block bg-[${color(id)}] ml-5 md:w-32 w-16 h-5`}>

            </div>
          </Card>
        );
      })}
    </>
  );
}
