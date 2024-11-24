import React from "react";
import "./Program.css";
import program1 from "../../assets/program1.png";
import program_2 from "../../assets/program-2.png";
import program_pic_3 from "../../assets/program_pic_3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_pic_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
