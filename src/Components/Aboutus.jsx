import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 80vh;
  padding-top: 20px;
`;
const Heading = styled.h1`
  font-weight: 200;
  font-size: 33px;
  font-family: "Righteous", cursive;
  color: #96948d;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media (max-width: 700px) {
    padding: 0px;
  }
`;
const Title = styled.div`
  font-weight: 200;
  font-size: 22px;
  font-family: "Josefin Sans", sans-serif;
  color: #1b1b1b;
  margin-top: 20px;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  color: #5e5e5e;
`;

function Aboutus() {
  return (
    <Container>
      <Heading>ABOUT US</Heading>
      <Wrapper>
        <ImgContainer>
          <Image
            src="https://img1.wsimg.com/isteam/stock/103726/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
            alt="Denim Jumpsuit Image"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>WHO WE ARE</Title>
          <Desc>
            M/s. Annapurna Traders, proprietor Mr. Abinash Dash, located at
            Nayapalli, Behera sahi, Bhubaneswar was established on 15th October,
            2015. This firm is basically a agricultural based documentary film
            production unit. Our firm has been working under various schemes of
            the department of Agriculture and Food production Odisha since 2015
            & till date with great enthusiasm and satisfaction. Our mission is
            to become one of the main reference company and to contribute
            towards the betterment of agriculture sector of the state.
          </Desc>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

export default Aboutus;
