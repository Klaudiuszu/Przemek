import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';
import CookiesConsent from "../../src/components/CookiesConsent";
import ConsultationEl from "../../src/components/architecturePage/Consultation";
import ConsultationMain from "../../src/components/consultation/ConsultationMain";

export { getStaticPaths } from "next-translations";

export default function Consultation() {

  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24 my-12'>
        <ConsultationMain />
        <ConsultationEl />
      </main>
      <CookiesConsent />
      <Footer />
    </>
  );
}

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
  return {
    props: {...translationsProps}
  }
};