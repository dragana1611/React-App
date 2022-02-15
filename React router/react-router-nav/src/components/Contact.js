import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";


const Contact = () => {
    
  return (
    <div>
      <Modal />
      <div
        className=" ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="alex" className="ui header">
          Alex
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </p>
      </div>

      <div
        className=" ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="willma" className="ui header">
          Willma
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </p>
      </div>
    </div>
  );
};

export default Contact;
