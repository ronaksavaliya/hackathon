import React from "react";
import "./heroSection.css";
import heroSectionImg from "../../assets/images/heroSectionImage.png";
import aiIcon from "../../assets/svg/aiIcon.svg";
import dataScientistIcon from "../../assets/svg/dataScientist.svg";
import challengesHostedIconBox from "../../assets/svg/aiHealing.svg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="heroSection">
        <div className="heroSectionLeft">
          <div className="verticalLine"></div>
          <div className="heroSectionContent">
            <h1 className="heroSectionHeading">
              Accelerate Innovation <br />
              with Global AI Challenges
            </h1>
            <p className="heroSectionDesc">
              AI Challenges at DPhi simulate real-world problems. It is a <br />
              great place to put your AI/Data Science skills to test on <br />
              diverse datasets allowing you to foster learning through <br />
              competitions.
            </p>
            <Link href="/admin">
              <button className="ctaBtn">Create Challenge</button>
            </Link>
          </div>
        </div>
        <div className="heroSectionImg">
          <Image src={heroSectionImg} alt="" />
        </div>
      </div>
      <div className="dataContainer">
        <div className="aiModelSubmissionBox">
          <div className="aiIconBox">
            <Image src={aiIcon} alt="" />
          </div>
          <div>
            <p className="submissionCount">100K+</p>
            <p className="aiModelText">AI model submissions</p>
          </div>
        </div>
        <div className="verticalLine1"></div>
        <div className="dataScientistsBox">
          <div className="dataScientistIconBox">
            <Image src={dataScientistIcon} alt="" />
          </div>
          <div>
            <p className="dataScientistCount">50K+</p>
            <p className="dataScientistText">Data Scientists</p>
          </div>
        </div>
        <div className="verticalLine2"></div>
        <div className="challengesHostedBox">
          <div className="challengesHostedIconBox">
            <Image src={challengesHostedIconBox} alt="" />
          </div>
          <div>
            <p className="challengesHostedCount">100K+</p>
            <p className="challengesHostedText">AI model submissions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
