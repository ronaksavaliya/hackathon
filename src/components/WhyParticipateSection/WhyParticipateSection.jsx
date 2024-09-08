import React from "react";
import "./whyParticipateSection.css";
import Image from "next/image";
import noteBookIcon from "../../assets/svg/noteBookIcon.svg";
import communityIcon from "../../assets/svg/communityIcon.svg";
import robotIcon from "../../assets/svg/robotIcon.svg";
import identificationCardIcon from "../../assets/svg/identificationCardIcon.svg";

const WhyParticipateSection = () => {
  return (
    <div>
      <h3 className="whyParticipateText">
        Why Participate in{" "}
        <span style={{ color: "#0FA958" }}>AI Challenges?</span>
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "80px",
        }}
      >
        <div className="whyParticipateCard">
          <Image src={noteBookIcon} alt="" />
          <h4 className="cardTitle">Prove your skills</h4>
          <p className="cardDesc">
            Gain substantial experience by solving real-world problems and pit
            against others to come up with innovative solutions.
          </p>
        </div>
        <div className="whyParticipateCard">
          <Image src={communityIcon} alt="" />
          <h4 className="cardTitle">Learn from community</h4>
          <p className="cardDesc">
            One can look and analyze the solutions submitted by the other Data
            Scientists in the community and learn from them.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px",
          paddingBottom: "100px",
        }}
      >
        <div className="whyParticipateCard">
          <Image src={robotIcon} alt="" />
          <h4 className="cardTitle">Challenge yourself</h4>
          <p className="cardDesc">
            There is nothing for you to lose by participating in a challenge.
            You can fail safe, learn out of the entire experience and bounce
            back harder.
          </p>
        </div>
        <div className="whyParticipateCard">
          <Image src={identificationCardIcon} alt="" />
          <h4 className="cardTitle">Earn recognition</h4>
          <p className="cardDesc">
            You will stand out from the crowd if you do well in AI challenges,
            it not only helps you shine in the community but also earns rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyParticipateSection;
