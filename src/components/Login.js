import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Acess to Raya and the Last Dragon for the price of $69.99
          with a Disney plus subscription. As of 03/26/21, the price of the
          Disney Bundle will increase by $420
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align=items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background: url("/images/login-background.jpg") no-repeat center center /
      cover fixed;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    content: "";
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  margin-top: 150px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const LogoOne = styled.img``;
const LogoTwo = styled.img`
  width: 90%;
`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 300ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
