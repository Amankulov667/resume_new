import "./FormsStyles.css";
import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Your Email</label>
        <input type="email"></input>
        <label>Your Subject</label>
        <input type="text"></input>
        <label>Your Message</label>
        <textarea rows="6" placeholder="Type your message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
