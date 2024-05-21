import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroIntro from "@/components/HeroIntro";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroIntro />
      <Container className="header-container mt-8" tag="header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore
        voluptas. Veritatis, doloremque obcaecati. Quae totam, laborum vel quo
        blanditiis consectetur perspiciatis deleniti obcaecati vitae quisquam
        assumenda ratione inventore autem.
      </Container>
      <Footer />
    </>
  );
}
