import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroIntro from "@/components/HeroIntro";
import Subscribe from "@/components/Subscribe";
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
      <Container className=" mt-8 flex-col px-10 " tag="section">
        <Subscribe />
      </Container>
      <Footer />
    </>
  );
}
