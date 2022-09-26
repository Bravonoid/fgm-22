import Infografis from "../components/pasar rakyat/home-pasar-rakyat/Infografis";
import SkemaPasar from "../components/pasar rakyat/home-pasar-rakyat/SkemaPasar";
import TemaPasarRakyat from "../components/pasar rakyat/home-pasar-rakyat/TemaPasarRakyat";
import TentangPasarRakyat from "../components/pasar rakyat/home-pasar-rakyat/TentangPasarRakyat";

export default function PasarRakyat() {
  return (
    <>
      <main className="overflow-hidden">
        <TentangPasarRakyat />
        <TemaPasarRakyat />
        <Infografis />
        <SkemaPasar />
      </main>
    </>
  );
}
