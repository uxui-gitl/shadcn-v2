import ClientLogos from "@/components/ClientLogos";
import Container from "@/components/Container";
import DesktopNavbar from "@/components/DesktopNavbar";
import Footer from "@/components/Footer";
import HeroIntro from "@/components/HeroIntro";
import HubExpertise from "@/components/HubExpertise";
import Robot from "@/components/Robot";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroIntro />
      <ClientLogos />
      <Robot />
      <HubExpertise />

      <Container className="header-container mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore
        voluptas. Veritatis, doloremque obcaecati. Quae totam, laborum vel quo
        blanditiis consectetur perspiciatis deleniti obcaecati vitae quisquam
        assumenda ratione inventore autem.
      </Container>
      <div className="mt-8 flex-col px-10 ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
