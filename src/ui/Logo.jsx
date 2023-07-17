import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const LogoParagraph = styled.p`
  font-size: 25px;
  color: #408080;
`;

function Logo() {
  return (
    <StyledLogo>
      {/* <Img src="/logo-light.png" alt="Logo" /> */}
      <LogoParagraph>
        Tranquil
        <span style={{ color: "#EFB518" }}> Lodging...</span>
      </LogoParagraph>
    </StyledLogo>
  );
}

export default Logo;
