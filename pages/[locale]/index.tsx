// import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar/Navbar";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';
// import CookiesConsent from "../../src/components/CookiesConsent";
// import EmailSection from "../../src/components/EmailSection";

export { getStaticPaths } from "next-translations";


export default function Home() {

  return (
    <>
      <Navbar />
      {/* <EmailSection /> */}
      {/* <Footer /> */}
      {/* <CookiesConsent /> */}
    </>
  );
}

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
  return {
    props: { ...translationsProps }
  }
};

