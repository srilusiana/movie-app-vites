// import styles from "./Footer.module.css";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <h2>Movie App</h2>
      <p>Created By Sri Lusiana</p>
    </StyledFooter>
  );
}

export default Footer;
