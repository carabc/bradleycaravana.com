import Layout from "@/components/Layout";
import styled from "styled-components";
import { withTheme } from "styled-components";
import Image from "next/image";
import headshot from "../public/images/headshot.png";
import PostCard from "@/components/PostCard/PostCard";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .headerTitles {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    h1 {
      margin: 0 0 0.5em 0;
      font-size: 2em;
    }

    cite {
      font-size: 0.85em;
    }

    .subHeaderBlock {
      margin-top: 0.5em;
    }

    .subHeaderBlock p {
      color: ${({ theme }) => theme.dark.fg};
      margin: 0;
      font-size: 0.85rem;
    }
  }

  .imageContainer {
    order: 1;
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    flex-direction: row;
    justify-content: center;
    gap: 2em;

    .headerTitles {
      order: 1;

      h1 {
        text-align: start;
      }
    }

    .imageContainer {
      order: 2;
    }
  }
`;

const SectionBlogPostStyled = styled.section`
  width: 90%;
  margin: 1em auto 0 auto;

  .header {
    color: #fff;
    text-align: center;
  }

  .cardContainer {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    .cardContainer {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    .header {
      text-align: initial;
    }
    .blogSectionHeaderContainer {
      width: 50%;
      margin: 0 auto;
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
            I&apos;m a Full Stack Developer at Maxim Group LLC.
          </cite>
          <div className="subHeaderBlock">
            <p>And I know absolutely nothing about anything.</p>
            <p>But I&apos;m damn good at learning.</p>
          </div>
        </div>
        <div className="imageContainer">
          <Image
            placeholder="blur"
            src={headshot}
            width={250}
            height={250}
            alt="Photo of Bradley Caravana"
          />
        </div>
      </MainStyled>
      <SectionBlogPostStyled>
        <div className="blogSectionHeaderContainer">
          <h2 className="header">Most Viewed Blog Posts</h2>
        </div>
        <div className="cardContainer">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </SectionBlogPostStyled>
    </Layout>
  );
});
