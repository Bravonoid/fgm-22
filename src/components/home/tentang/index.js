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
        return "fgm-hijau";
      case 1:
        return "fgm-merah-orange";
      case 2:
        return "fgm-orange";
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
            <div className="md:ml-8 items-center w-fit flex justify-center">
            <span>{cards.name}</span>
              <div className={` hidden  md:inline-block bg-${color(id)} ml-5 md:w-32 w-full h-6`}>
            </div>
              

            </div>
          </Card>
        );
      })}
    </>
  );
}
