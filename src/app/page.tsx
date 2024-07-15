import CardsSection from "@/components/CardsSection";
import ClientLogos from "@/components/ClientLogos";
import Container from "@/components/Container";
import DesktopNavbar from "@/components/DesktopNavbar";
// import DesktopNavbar from "@/components/DesktopNavbar";
import Footer from "@/components/Footer";
import HeroIntro from "@/components/HeroIntro";
import HubExpertise from "@/components/HubExpertise";
import OfferingsSlider from "@/components/OfferingsSlider";
import ResultSection from "@/components/ResultSection";
import Robot from "@/components/Robot";
import Subscribe from "@/components/Subscribe";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import React from "react";

import CardSectionNew from "@/components/CardsSectionNew";

import Announcement from "@/components/Announcement";

export default function Home() {
  return (
    <>
      <Announcement />

        <DesktopNavbar />
      <HeroIntro />
      <ClientLogos />
      {/* <Robot /> */}

      {/* <CardsSection /> */}
      <CardSectionNew />
      <HubExpertise />

      <OfferingsSlider />

      <div className="dv-gradientbg">
        <Container className=" flex-col px-10 " tag="section">
          <ResultSection />
        </Container>
        <InfiniteMovingCards
          items={[
            {
              quote:
                "Godrej Infotech helped us in accelerating digital transformation journey with Business Central on Azure cloud and Power BI solution. As a result, our material requisition efficiency has increased by 66%, time taken in processing purchase orders is reduced by 79% and invoice processing efficiency has improved by 60%.",
              name: "IT Director,",
              title: "Cooling Facility Management Company",
            },
            {
              quote:
                "Godrej Infotech helped us in accelerating digital transformation journey with Business Central on Azure cloud and Power BI solution. As a result, our material requisition efficiency has increased by 66%, time taken in processing purchase orders is reduced by 79% and invoice processing efficiency has improved by 60%.",
              name: "IT Director,",
              title: "Cooling Facility Management Company",
            },
            {
              quote:
                "Godrej Infotech helped us in accelerating digital transformation journey with Business Central on Azure cloud and Power BI solution. As a result, our material requisition efficiency has increased by 66%, time taken in processing purchase orders is reduced by 79% and invoice processing efficiency has improved by 60%.",
              name: "IT Director,",
              title: "Cooling Facility Management Company",
            },
          ]}
        />
      </div>

      <div className="mt-8 flex-col px-10 ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
