import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20vh;
`;
const Wrapper = styled.div`
  padding: 0px;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Image = styled.img``;

function Logo() {
  return (
    <Container>
      <Wrapper>
        <Image
          className="Logo-Image-class"
          src="https://img1.wsimg.com/isteam/ip/e42ea76b-6f6e-44f7-b45f-7d0047485b9b/AT%20PD%20(Custom).png/:/rs=w:180,h:180,cg:true,m/cr=w:180,h:180/qt=q:100/ll"
        />
      </Wrapper>
    </Container>
  );
}

export default Logo;
