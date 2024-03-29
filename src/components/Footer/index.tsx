import { motoLogo } from "assets";
import Container from "components/Container";
import LazyImage from "components/LazyImage";
import { colors } from "constants/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";
const { gray, teal } = colors;
const StyledFooter = styled.footer`
  padding: ${pxToRem(10)} 0 ${pxToRem(20)} 0;
  border-top: ${pxToRem(1)} solid ${gray}30;
  ${layout("flex")}
  flex-wrap: wrap;
  .logo {
    max-width: ${pxToRem(150)};
    text-align: center;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  .footer__links {
    ${layout("flex")}
    gap: ${pxToRem(10)};
  }
  span {
    color: ${teal};
    font-weight: bold;
  }
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    .logo {
      max-width: ${pxToRem(110)};
      margin: auto;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div>
          <div className="logo">
            <LazyImage src={motoLogo} alt="Motoshop.uz" />
          </div>
          <Link
            to="https://ilhomjon.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Made with ❤️ by <span>Ilhomjon</span>
          </Link>
        </div>

        <ul className="footer__links">
          <li>
            <Link
              to="https://instagram.com/motoshopuz"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to="https://instagram.com/motoshopuz"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
