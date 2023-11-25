import React from "react";
import { FooterWrapper } from "./style";
import { Instagram, YouTube, GitHub } from "@mui/icons-material/";
import { Typography, IconButton } from "@material-tailwind/react";

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div>
          <Typography>
            Living, learning, & leveling up one day at a time.
          </Typography>
          <Typography>Handcrafted by me ⓒtwentytwentythree </Typography>
          <div className="extra-icons">
          <a href='https://www.instagram.com/wisdom_xx2' target='_blank' rel='noopener noreferrer'>
            <Instagram />
            </a>
            <a
              href="https://www.youtube.com/@AnnngJH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube />
            </a>
            <a
              href="https://github.com/wisdomx2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
