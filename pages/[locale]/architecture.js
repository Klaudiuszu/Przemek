import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import ArchitectureSection from "../../src/components/architecturePage/ArchitectureSection";
import Consultation from "../../src/components/architecturePage/Consultation";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';
import CookiesConsent from "../../src/components/CookiesConsent";
import FillarSection from "../../src/components/architecturePage/FillarsSection";
import RealisationSection from "../../src/components/architecturePage/RealisationSection";

export { getStaticPaths } from "next-translations";

export default function Architecture() {

  return (
    <>
      <Navbar />
      <div></div>
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24 my-12'>
        <RealisationSection />
        <ArchitectureSection />
        <FillarSection />
        <Consultation />
      </main>
      <CookiesConsent />
      <Footer />
    </>
  );
}

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.architecture])
  return {
    props: {...translationsProps}
  }
};

