import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard/PostCard";
import styled from "styled-components";

const MainStyled = styled.main`
  width: 90%;
  margin: 0 auto;

  .headerTitles cite {
    display: block;
  }

  .headerTitles h1,
  .headerTitles cite {
    text-align: center;
  }

  .headerTitles {
    color: #fff;
    h1 {
      margin: 0 0 0 0;
      font-size: 2em;
    }

    cite {
      font-size: 0.85em;
    }

    .subHeaderBlock {
      color: #fff;
      font-size: 0.85em;
      display: flex;
      text-align: justify;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        width: 100%;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    width: 70%;

    .headerTitles h1,
    .headerTitles cite {
      text-align: initial;
    }

    .subHeaderBlock {
      display: flex;
      align-items: start;

      p {
        font-size: 1em;
        margin: 0.5em 0;
      }
    }
  }

  @media (min-width: 1280px) and (max-width: 1650px) {
    width: 50%;

    .subHeaderBlock {
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1651px) {
    width: 30%;

    .subHeaderBlock {
      p {
        font-size: 1rem;
      }
    }
  }
`;

const SectionAllPosts = styled.section`
  color: #fff;
  width: 90%;
  margin: 0 auto;

  .headerContainer h1 {
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    width: 70%;
    .headerContainer h1 {
      text-align: initial;
    }
  }

  @media (min-width: 880px) {
    width: 70%;
  }

  @media (min-width: 1280px) and (max-width: 1650px) {
    width: 50%;
  }

  @media (min-width: 1651px) {
    width: 30%;
  }
`;

export default function Blog() {
  return (
    <Layout title="Bradley Caravana | Blog">
      <MainStyled>
        <div className="headerTitles">
          <h1>
            Bradley <span className="hl">Caravana</span>
          </h1>
          <cite className="subHeader">
            I&apos;m a Full Stack Developer at Maxim Group LLC.
          </cite>
          <div className="subHeaderBlock">
            <p>This is not another developer blog.</p>
            <p>
              I started my first blog back in the summer of 2020 when I really
              hit the ground running with being a developer. I dove head-first
              into front-end frameworks and templating engines (such as
              handlebars, which is what my original blog was rendered in),
              back-end APIs, NodeJS, Express, and ORMs such as Mongoose.
            </p>
            <p>
              I severely limited myself to only posting about programming
              related topics, which is why I think I never stuck with it.
              Furthermore, the workflow of creating a new post was cumbersome.
              In order to combat both of these obstacles, I&apos;ll be writing
              about whatever it is I feel like writing about. Whether that be
              any of my hobbies (programming include) or anything happening in
              my life. I&apos;ll also be sticking to adding files manually and
              pushing to my code repository, rather than creating pages to add
              and edit posts.
            </p>
            <p>
              Why not just get a journal? Because this also gives me an excuse
              to build something that will benefit me in more ways than one. I
              love learning how to build new things.
            </p>
          </div>
        </div>
      </MainStyled>
      <SectionAllPosts>
        <div className="headerContainer">
          <h1>
            All <span className="hl">Posts</span>
          </h1>
        </div>
        <div className="postsContainer">
          <PostCard />
        </div>
      </SectionAllPosts>
    </Layout>
  );
}
