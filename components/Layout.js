import Head from "next/head";
import MobileNagivation from "./MobileNavigation/MobileNavigation";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import styled from "styled-components";

const ContentContainerDivStyled = styled.div`
  .navContainer {
  }
`;

export default function Layout({
  children,
  keywords,
  description,
  title,
  theme,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <ContentContainerDivStyled>
        <div className="navContainer"></div>
        <Navigation />
        <MobileNagivation />
        {children}
        <Footer />
      </ContentContainerDivStyled>
    </>
  );
}

Layout.defaultProps = {
  keywords:
    "Bradley Caravana, Blog, JavaScript, React, NextJS, Express, Node, Serverside, lifestyle blog, cooking, development, front-end development, back-end, back-end development, full-stack",
  description:
    "React / NextJS blog written by Bradley Caravana, a full stack web developer from Long Island, New York.",
  title: "Bradley Caravana",
};
