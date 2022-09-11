import { Link } from "react-router-dom";
import Slider from "../components/home/slider";
import Logo from "../components/tentang/Logo";
import ActiveTab from "../components/tentang/ActiveTab";

export default function About() {
  return (
    <>
      <main className="overflow-hidden">
        <Logo />
        <ActiveTab />
      </main>
    </>
  );
}
