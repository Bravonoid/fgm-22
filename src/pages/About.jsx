import { Link } from "react-router-dom";
import Slider from "../components/home/slider";
import Tentang from "../components/tentang/Tentang";
import ActiveTab from "../components/tentang/ActiveTab";
import Maskot from "../components/tentang/Maskot";
import Harapan from "../components/tentang/Harapan";

export default function About() {
  return (
    <>
      <main className="overflow-hidden">
        <Tentang />
        <ActiveTab />
        <Maskot />
        <Harapan />
      </main>
    </>
  );
}
