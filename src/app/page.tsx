// system import
import Image from "next/image";
import React from "react";
// component import
import Announcement from "@/components/home/Announcement";
import Navbar from "@/components/home/navbar";
import HeroIntro from "@/components/home/HeroIntro";
import ClientLogos from "@/components/home/ClientLogos";
import Robot from "@/components/home/Robot";
import Robot2 from "@/components/home/Robot2"
import EmbraceCard from "@/components/home/EmbraceCard";
import HubExpertise from "@/components/home/HubExpertise";
import OfferingsSlider from "@/components/home/OfferingsSlider";
import ResultSection from "@/components/home/ResultSection";
import { InfiniteMovingCards } from "@/components/home/ui/infinite-moving-cards";
import Subscribe from "@/components/home/Subscribe";
import Footer from "@/components/home/Footer";
import Container from "@/components/home/Container";
import OfferingCards from "@/components/home/OfferingCards";

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <HeroIntro />
      <div className="common-section-client-robot">
        <div>
          <ClientLogos></ClientLogos>
        </div>
        <div className="flex justify-center text-6xl font-medium text-center leading-tight pt-16" style={{color:"#CDBAF3"}}>
          Building Tomorrow&apos;s <br /> Solutions Today
        </div>
        {/* <Robot /> */}
        <Robot2 />

      </div>

      <EmbraceCard />
      <HubExpertise />
      <OfferingCards></OfferingCards>

      {/* <OfferingsSlider /> */}

      

      <div className="dv-gradientbg">
        <Container className=" flex-col px-10 " tag="section">
          <ResultSection />
        </Container>
        {/* <InfiniteMovingCards
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
        /> */}

        <InfiniteMovingCards/>
      </div>

      <div className="mt-8 flex-col px-10 ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
