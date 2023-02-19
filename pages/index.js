import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import styled from "styled-components";
import { withTheme } from "styled-components";

const MainStyled = styled.main`
  color: #fff;

  .headerTitles {
    h1 {
      margin: 0;
    }

    p {
      color: ${({ theme }) => theme.dark.fg};
      margin: 0;
    }
  }
`;

export default withTheme(function Home() {
  return (
    <Layout>
      <MainStyled>
        <div className="headerTitles">
          <h1>
            Bradley <span className="hl">Caravana</span>
          </h1>
          <cite className="subHeader">
            Full Stack Developer at Maxim Group LLC.
          </cite>
          <p>And I know absolutely nothing about everything.</p>
        </div>
      </MainStyled>
    </Layout>
  );
});
