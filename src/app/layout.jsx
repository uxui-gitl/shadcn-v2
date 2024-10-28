"use client";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
// import Footer from "@/sections/footer/Footer";
import Footer from "@/components/home/Footer";
import Copyright from "@/sections/copyright/Copyright";
import React, { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
const inter = Inter_Tight({ subsets: ["latin"] });

import { NextUIProvider } from "@nextui-org/react";

const defaultMetadata = {
  title:
    "Godrej Infotech | Empowering Business Through Digital Transformation | Microsoft Dynamics, Infor, LS Central, Oracle",
  description:
    "Godrej Infotech, A G&B Group Company is a global leader in technology services and digital transformation with clients across Manufacturing, Retail, Transport and logistics, Oil & Gas Industies. We have been helping our clients across India, Middle East, Asia Pacific - Singapore, Philipines, Europe and USA with Innovative Solutions in the evolving world of ERP, Cloud, Digital & Platforms across technologies.",
};

function generateMetadata(route) {
  const metadata = {
    "/": {
      title: "Home | Empower Business through Digital Transformation",
      description:
        "Godrej Infotech is automation, cloud & digital transformation service & solution provider. Headquarter in India & offices in APAC, Middle East, Europe & USA. Our tech partners Microsoft, Infor, LS Retail, Oracle, Salesforce, Automation Anywhere & UiPath helps us to deliver results for enterprises.",
        keywords:"Automation, Cloud, Transformation, Microsoft, Infor, Oracle, Digital, LS, Intelligent technologies, Intelligent technologies, AI/ML, RPA, IIOT, Data Insights, Cybersecurity, Tech-Stack, Upgrade to Cloud, Cloud, Stack and Services, Enterptise Suite, Customer Experience, Infor, Infor WMS, Infor LN, Infor CloudSuite, HxnEAM, Microsoft Practises, Business Central, Microsoft Dynamics D365 F&O, Microsoft Dynamics D365 Commerce, Oracle, Infor CRM, Microsoft CRM, Salesforce CRM, Magento - E com, LS Retail, Business Consulting, Implementation & Global Rollout, Managed Services, Projects, Manufacturing, Retail, Trading and Distribution, Professional Services"
    },
    "/solutions/intelligent-technologies": {
      title: "Intelligent Solutions to Charge Your Business Value Chain with Ease",
      description:"We focus on delivering results by leveraging advanced competencies, aligning with clients' goals. Intelligent Technologies like AI, ML, and IoT drive transformative innovations, optimizing processes and decision-making for business efficiency and agility.",
      keywords:"ai and learning,ai and machine learning courses,ai and machine learning for beginners,ai and machine learning for business,ai and machine learning in fintech,ai and machine learning in marketing,ai and machine learning software,ai and ml for managers,ai and ml in data management,ai and ml in testing,ai and ml learning,ai and ml platforms,ai and ml training,ai applications for business,ai artificial intelligence software,ai automation companies,ai based machine learning,ai data training,ai for machine learning,ai how to learn,ai learning,ai learning companies,ai learning software,ai machine learning companies,ai machine learning platforms,ai machine learning training,ai ml and data science,ai ml for beginners,ai ml learning,ai ml machine learning,ai ml training,ai offerings,ai outsourcing companies,ai platforms for business,ai products and services,ai service providers,ai software platforms,ai solution provider,ai solution providers,ai technology for business,ai technology learning,ai technology providers,ai training companies,ai training platform,ai training software,ai with data science,artificial intelligence & machine learning for business,artificial intelligence and machine learning for beginners,artificial intelligence and machine learning for business,artificial intelligence and machine learning training,artificial intelligence beginners guide,artificial intelligence data science and machine learning,artificial intelligence for data science,artificial intelligence from scratch,artificial intelligence help,artificial intelligence how to learn,artificial intelligence how to use,artificial intelligence in business and management,artificial intelligence in business development,artificial intelligence machine learning and data science,artificial intelligence on business,artificial intelligence service providers,artificial intelligence support,artificial intelligence where to start,machine ai learning,machine e learning,machine learning & data science,machine learning advanced,machine learning ai companies,machine learning ai projects,machine learning and ai courses,machine learning and predictive maintenance,machine learning applications in supply chain management,machine learning business analyst,machine learning by ibm,machine learning cloud services,machine learning computer,machine learning cost,machine learning for business analyst,machine learning for financial markets,machine learning for working professionals,machine learning from scratch,machine learning full course,machine learning how to get started,machine learning in financial markets,machine learning in predictive maintenance,machine learning live projects,machine learning model as a service,machine learning online platform,machine learning projects for data science,machine learning quick start,machine learning to predict,machine learning use cases in supply chain,machine learning using aws,machine learning what to learn,machine learning with data science,microsoft ai and machine learning,microsoft machine learning tools,ml ai courses,ml ai training,ml cloud services,ml experience,ml for data science,ml for security,ml learning,ml training"

    },
    "/solutions/intelligent-technologies/ai-ml": {
      title: "Optimize Business with Artificial Intelligence and Machine Learning",
      description: "We fine-tune business parameters, ensuring a notable change in your overall business proficiency. Join with us to fully immerse in the transformative power of AI and ML, setting off on a collaborative journey toward enriching innovation and achieving exceptional success for your business endeavours",
      keywords:"ai and learning,ai and machine learning courses,ai and machine learning for beginners,ai and machine learning for business,ai and machine learning in fintech,ai and machine learning in marketing,ai and machine learning software,ai and ml for managers,ai and ml in data management,ai and ml in testing,ai and ml learning,ai and ml platforms,ai and ml training,ai applications for business,ai artificial intelligence software,ai automation companies,ai based machine learning,ai data training,ai for machine learning,ai how to learn,ai learning,ai learning companies,ai learning software,ai machine learning companies,ai machine learning platforms,ai machine learning training,ai ml and data science,ai ml for beginners,ai ml learning,ai ml machine learning,ai ml training,ai offerings,ai outsourcing companies,ai platforms for business,ai products and services,ai service providers,ai software platforms,ai solution provider,ai solution providers,ai technology for business,ai technology learning,ai technology providers,ai training companies,ai training platform,ai training software,ai with data science,artificial intelligence & machine learning for business,artificial intelligence and machine learning for beginners,artificial intelligence and machine learning for business,artificial intelligence and machine learning training,artificial intelligence beginners guide,artificial intelligence data science and machine learning,artificial intelligence for data science,artificial intelligence from scratch,artificial intelligence help,artificial intelligence how to learn,artificial intelligence how to use,artificial intelligence in business and management,artificial intelligence in business development,artificial intelligence machine learning and data science,artificial intelligence on business,artificial intelligence service providers,artificial intelligence support,artificial intelligence where to start,machine ai learning,machine e learning,machine learning & data science,machine learning advanced,machine learning ai companies,machine learning ai projects,machine learning and ai courses,machine learning and predictive maintenance,machine learning applications in supply chain management,machine learning business analyst,machine learning by ibm,machine learning cloud services,machine learning computer,machine learning cost,machine learning for business analyst,machine learning for financial markets,machine learning for working professionals,machine learning from scratch,machine learning full course,machine learning how to get started,machine learning in financial markets,machine learning in predictive maintenance,machine learning live projects,machine learning model as a service,machine learning online platform,machine learning projects for data science,machine learning quick start,machine learning to predict,machine learning use cases in supply chain,machine learning using aws,machine learning what to learn,machine learning with data science,microsoft ai and machine learning,microsoft machine learning tools,ml ai courses,ml ai training,ml cloud services,ml experience,ml for data science,ml for security,ml learning,ml training"
    },
    // Add metadata for other routes
  };

  return metadata[route] || defaultMetadata;
}

export default function RootLayout({ children, route }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  const metadata = generateMetadata(pathname);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Add other meta tags as needed */}
      </head>
      <body className={`${inter.className} dark`}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <NextUIProvider>
              <NextTopLoader />
              {children}
              <div className="" style={{ backgroundColor: '#1D162B' }}>
                <Footer />
              </div>
              {/* <Copyright /> */}
            </NextUIProvider>
            {/* <Analytics />
            <SpeedInsights /> */}
          </>
        )}
        <script
          src="//rum-static.pingdom.net/pa-65f01a5e68cac40012000883.js"
          async
        ></script>
      </body>
    </html>
  );
}
