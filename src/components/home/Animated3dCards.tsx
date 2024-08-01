import React from "react";

interface Animated3dCardsProps {
  titleText: string;
  desc: string;
}

const Animated3dCards: React.FC<Animated3dCardsProps> = ({
  titleText,
  desc,
}) => {
  return (
    <div>
      <div className="wrapper my-8 sm:my-4">
        <div className="card">
          <div className="front">
            <h1>{titleText || "Embrace Tomorrow with Automation"}</h1>
            <p>
              {desc ||
                "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), IoT & Analytics."}
            </p>
          </div>
          <div className="right">
            <h2>{titleText || "Embrace Tomorrow with Automation"}</h2>
            <ul>
              <li>Width 7.7</li>
              <li>Length 31.75</li>
              <li>Wheelbase 14</li>
              <li>Nose 6.875</li>
              <li>Tail 6.25</li>
            </ul>
            <button>Know More</button>
          </div>
        </div>
        <div className="img-wrapper hidden">
          {/* <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png' alt=''> */}
        </div>
      </div>
    </div>
  );
};

export default Animated3dCards;
