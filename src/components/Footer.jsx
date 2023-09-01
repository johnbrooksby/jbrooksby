import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="foot">
        <span style={{ textDecoration: 'none' }}>
          &copy; 2023 John Brooksby - Photo by&nbsp;
          <a
            style={{textDecoration: "none" }}
            href="https://unsplash.com/@trommelkopf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Steve Harvey
          </a>
          <span style={{color: "rgb(65, 65, 65)"}}>&nbsp;on&nbsp;</span>
          <a
            style={{textDecoration: "none" }}
            href="https://unsplash.com/photos/Ok0vnFg0OBs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Unsplash
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
