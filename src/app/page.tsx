// system import
import Image from "next/image";
import React from "react";
// component import
import Announcement from "@/components/Announcement";
import Navbar from "@/components/navbar";
import HeroIntro from "@/components/HeroIntro";
import ClientLogos from "@/components/ClientLogos";
import Robot from "@/components/Robot";
import Robot2 from "@/components/Robot2"
import EmbraceCard from "@/components/EmbraceCard";
import HubExpertise from "@/components/HubExpertise";
import OfferingsSlider from "@/components/OfferingsSlider";
import ResultSection from "@/components/ResultSection";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import OfferingCards from "@/components/OfferingCards";

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <HeroIntro />
      <div className="common-section-client-robot bg-[url('/curvedl1.png')]">
        <div>
          <ClientLogos></ClientLogos>
        </div>
        <div className="flex justify-center text-6xl font-medium text-center leading-tight pt-16" style={{color:"#CDBAF3"}}>
          Building Tomorrow's <br /> Solutions Today
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

        <InfiniteMovingCards items={[]}/>
      </div>

      <div className="mt-8 flex-col px-10 ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
