import React from "react";
import styled from "styled-components";

const FooterText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  padding: 3px;
  color: #fff;

  i {
    cursor: pointer;
  }
`;

const Footer = () => {
  function goto(url) {
    window.location = url;
  }

  return (
    <div>
      <FooterText>
      <h5> INS project: CO/409 &CO/408</h5>

      </FooterText>
    </div>
  );
};

export default Footer;
