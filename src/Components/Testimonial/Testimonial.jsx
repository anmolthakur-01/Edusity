import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
        tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };
  return (
    <div className="testimonial">
      <img src={next_icon} className="next-btn" onClick={slideForward} />
      <img src={back_icon} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Saneha</h3>
                  <span>BECT, GSP</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at B.C.E.T. gurdaspur (Beant College of Engineering and Technology) was one of the best decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Salman</h3>
                  <span>BECT, GSP</span>
                </div>
              </div>
              <p>
              B.C.E.T(beant collage of engg. and tech.) is nearest by the national highway 15 at pathankot to gurdaspur . this is a govt. college in gurdaspur. the college campus is big arround the college. many student year by the admission in year by year many student in this college increased. best college in gurudaspur.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Vishakha</h3>
                  <span>BECT, GSP</span>
                </div>
              </div>
              <p>
              This college have very good infrastructure. This college give you B.tech and M.tech degree. may be MA. the branches available in this college are Mechanical, Electronics, Biotech, Chemical, Computer Science, etc.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Vishal Singh</h3>
                  <span>BECT, GSP</span>
                </div>
              </div>
              <p>
              B.C.E.T. gurdaspur (Beant College of Engineering and Technology) is an academic autonomous, NBA and NAAC 'A' accredited engineering college located in Gurdaspur, Punjab, India. BCET imparts education in various engineering disciplines. BCET has seven academic and two administrative departments. BCET is considered to be one of the premier engineering institution of Punjab.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
