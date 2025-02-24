import React from "react";
import "./Contect.css";
import msg_icon from "../../assets/msg-icon.png";

const Contect = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a073c4f-231e-4f8c-a300-a7a60ebaed7f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contect">
      <div className="contect-col">
        <h3>
          Send us a message <img src={msg_icon} />{" "}
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <i class="fa-solid fa-envelope"></i>registrarsbssu@gmail.com
          </li>
          <li>
            <i class="fa-solid fa-phone"></i>+0187-4292879
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i>National Highway 15,
            Gurdaspur,
            <br /> Punjab 143530
          </li>
        </ul>
      </div>
      <div className="contect-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>MOBILE NUMBER</label>
          <input
            type="tel"
            name="Mobile number"
            placeholder="Enter you mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message..."
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contect;
