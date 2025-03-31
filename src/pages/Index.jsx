import "../styles/shapeDivs.css";
import Cta from "../components/sections/Cta";
import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Steps from "../components/sections/Steps";
// import Maps from "../components/sections/Maps";
import Features from "../components/sections/Features";
import Navbar from "../components/sections/NavbarSocial";
import BlogPosts from "../components/sections/BlogPosts";
import FooterSocial from "../components/sections/FooterSocial";
import AboutInstagram from "../components/sections/AboutInstagram";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import Maps from "../components/sections/Maps";

export default function Index() {
  return (
    <>
      <Navbar LightMode={false} />
      <Hero appDownloadButtons={false} personImg={false} fundoImage={true} herodefault={true} />

      <Features
        defaultFeature={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
      />
      <About modal={true} showGallery={false} />
      <AboutInstagram
        socialPrint={true}
        instagram={true}
        facebook={false}
        linkedin={false}
        x={false}
      />
      <Cta />
      <Steps />
      {/* <Maps /> */}
      {/* <BlogPosts /> */}
      <Faq />
      <FooterSocial
        LightMode={false}
        addres={true}
        phoneSecundario={false}
        emailSecundario={false}
        addresSecundario={false}
        instagram={true}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
