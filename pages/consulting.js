import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Consultation from "./components/architecturePage/Consultation";
import ProcesSection from "./components/architecturePage/ProcesSection";
import ConsultingSection from "./components/consulting/ConsultingSection";

export default function Consulting() {

  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24 my-12'>
        <Consultation />
        <ConsultingSection />
        <ProcesSection />
      </main>
      <Footer />
    </>
  );
}
