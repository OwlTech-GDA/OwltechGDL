import React from "react";
import "./Contact.css";
import Logo from "../../assets/Logo3.png";
import FbLogo from "../../assets/media/facebook.png";
import IgLogo from "../../assets/media/ig.png";
import EmailLogo from "../../assets/media/email.png";

export default function Contact() {
  const handlerUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="contact-body">
      <div className="logo-container">
        <img src={Logo} />
      </div>
      <div className="footer-container">
        <p>OwlTech | Tecnológico de Monterrey</p>
      </div>
      <div className="social-media">
        <div
          className="media"
          onClick={() => handlerUrl("mailto:owltech@outlook.com?")}
        >
          <img alt="Email logo" src={EmailLogo} />
          <p>owltech@outlook.com</p>
        </div>
        {/* <div className="media">
          <img alt="Fb logo" src={FbLogo} />
          <p>@OwlTech</p>
        </div> */}
        <div
          className="media"
          onClick={() =>
            handlerUrl(
              "https://www.instagram.com/owltech.gdl?igsh=MXNpOTJzY3Vpc3U2OA=="
            )
          }
        >
          <img alt="Instagram logo" src={IgLogo} />
          <p>@OwlTech</p>
        </div>
      </div>
    </div>
  );
}
