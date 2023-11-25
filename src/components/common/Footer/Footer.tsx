import React from "react";
import { FooterWrapper } from "./style";
import { Instagram, YouTube, GitHub } from "@mui/icons-material/";
import { IconButton } from "@material-tailwind/react";

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div>
          <div>Handcrafted by me ⓒtwentytwentythree </div>
          <div className="extra-icons">
            <Instagram />
            <YouTube />
            <GitHub />
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
