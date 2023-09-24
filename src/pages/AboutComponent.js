import React, { Fragment, useState } from "react";
import "./AboutComponent.css";
import pc from "../images/pc.png";
import precision from "../images/precision.png";
import time from "../images/24-hours.png";
import education from "../images/education.png";

const AboutComponent = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <Fragment>
      <section className="about">
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>
          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2> Vision & Mission </h2>
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>Features</h2>
              </div>
            </div>

            <div className="tab-content">
              {/* About content */}
              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>About Us</h2>
                <p style={{ textAlign: "justify" }}>
                  Welcome to the National Committee dedicated to Standardizing
                  Medical Textbooks. Our mission is to ensure that medical
                  students pursuing Ayurveda, Unani, and Siddha (ASU) systems
                  receive the highest quality education. The abundance of subpar
                  textbooks with vested interests has hindered students'
                  progress for far too long. To combat this, our expert
                  committee has crafted an assessment scale to help teachers
                  select superior textbooks, provide guidance to authors, and
                  recommend standards to regulatory bodies. We're modernizing
                  the assessment process with the input of expert reviewers,
                  ensuring a faster and more comprehensive evaluation. Join us
                  in our quest to elevate ASU medical education to new heights.
                </p>
              </div>

              {/* Skills content */}
              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <h2>Our Vision</h2>
                <p style={{ textAlign: "justify" }}>
                  Our vision is to elevate ASU medical education through quality
                  and transparency, shaping a new era of exceptional medical
                  practitioners.
                </p>

                <h2>Our Mission</h2>
                <p style={{ textAlign: "justify" }}>
                  Our mission is to ensure top-tier ASU medical education by
                  developing assessment scales, fostering informed choices, and
                  championing excellence in textbooks and solutions.
                </p>

                <div className="skills-row"></div>
              </div>

              {/* Experience Content */}
              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="exp-column">
                  <h3>Features</h3>
<br/>
                  <div className="flex-container">
                    <div className="flex-item">
                      <ul>
                        <li>
                          <div className="circle-avatar">
                            <img src={time} alt="Icon 1" />
                          </div>
                          24x7 support
                        </li>
                        <li>
                          <div className="circle-avatar">
                            <img src={pc} alt="Icon 2" />
                          </div>
                          Online Assessment Tool
                        </li>
                        <li>
                          <div className="circle-avatar">
                            <img src={education} alt="Icon 1" />
                          </div>
                          Educational Resources
                        </li>
                        <li>
                          <div className="circle-avatar">
                            <img src={precision} alt="Icon 1" />
                          </div>
                          Precision
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutComponent;
