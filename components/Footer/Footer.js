import styled from "styled-components";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const DivStyled = styled.div`
  width: 100%;
  margin: 4em 0 0 0;

  .linkContainer {
    width: 100%;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      justify-content: center;
      align-items: center;
      gap: 1em;

      a {
        text-decoration: none;
        color: #fff;
        border: 1px solid ${({ theme }) => theme.dark.border};
        padding: 1.25em 1em;
        border-radius: 10px;
        width: 90%;
        transition: all 0.1s ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.dark.fg};
          border-color: ${({ theme }) => theme.dark.fg};
        }

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .spotify {
            font-size: 0.8em;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1em;
          }

          .iconAndText {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1em;
          }
        }
      }
    }
  }

  .footerText {
    color: #fff;
    display: flex;
    justify-content: center;
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    width: 70%;
    margin: 4em auto 0 auto;
    .linkContainer {
      ul {
        flex-direction: row;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 30%;
    margin: 4em auto 0 auto;
    .linkContainer {
      ul {
        flex-direction: row;
      }
    }
  }
`;

export default function Footer() {
  return (
    <DivStyled>
      <div className="linkContainer">
        <ul>
          <a href="https://www.linkedin.com/in/bradley-caravana-4a9503175/">
            <li>
              <div className="iconAndText">
                <AiOutlineLinkedin size={30} />
                LinkedIn
              </div>
              <FiArrowUpRight size={30} />
            </li>
          </a>
          <a href="https://github.com/carabc">
            <li>
              <div className="iconAndText">
                <AiOutlineGithub size={30} />
                GitHub
              </div>
              <FiArrowUpRight size={30} />
            </li>
          </a>
          <a href="https://www.instagram.com/bradleycaravana/">
            <li>
              <div className="iconAndText">
                <AiOutlineInstagram size={30} />
                Instagram
              </div>
              <FiArrowUpRight size={30} />
            </li>
          </a>
        </ul>
      </div>
      <div className="footerText">
        <p>&copy; Bradley Caravana {new Date().getFullYear()}</p>
      </div>
    </DivStyled>
  );
}
