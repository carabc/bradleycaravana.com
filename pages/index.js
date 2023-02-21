import { useEffect } from "react";
import Layout from "@/components/Layout";
import styled from "styled-components";
import { withTheme } from "styled-components";
import Image from "next/image";
import headshot from "../public/images/headshot.png";
import PostCard from "@/components/PostCard/PostCard";
import Link from "next/link";
import useStore from "@/src/store";
import axios from "axios";

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
      margin: 0 0 0 0;
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
      align-items: start;

      .subHeaderBlock p {
        text-align: start;
      }
    }

    .imageContainer {
      order: 2;
    }
  }
`;

const SectionAboutStyled = styled.section`
  color: #fff;
  width: 90%;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 0;
  }

  .textContainer {
    color: #fff;
    font-size: 0.85rem;
    display: flex;
    flex-direction: column;
    text-align: justify;
    align-items: center;
    justify-content: center;

    p {
      width: 100%;
    }
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    width: 70%;
    .textContainer {
      align-items: start;
      p {
        font-size: 1em;
        margin: 0.25em 0;
      }

      p a {
        color: ${({ theme }) => theme.dark.hl};
        text-decoration: none;
      }
    }
  }

  @media (min-width: 1280px) and (max-width: 1650px) {
    width: 50%;
  }

  @media (min-width: 1651px) {
    width: 30%;

    .textContainer {
      p {
        font-size: 1rem;
      }
    }

    h2 {
      text-align: initial;
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
    margin: 2em auto 0 auto;

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
  const setRepos = useStore((state) => state.setRepos);
  const repos = useStore((state) => state.repos);

  useEffect(() => {
    let fetchRepos = async () => {
      let data = await axios.get(process.env.NEXT_PUBLIC_GITHUB_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setRepos(data.data);
    };

    if (repos.length === 0) {
      fetchRepos();
      console.log("refetching repos...");
    }
  }, [setRepos, repos]);

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
      <SectionAboutStyled>
        <h2>
          About <span className="hl">Me</span>
        </h2>
        <div className="textContainer">
          <p>
            Hey, my name is Bradley Caravana. But you probably knew that already
            based on the domain and the gigantic text at the top. I&apos;m a
            Full Stack Developer at Maxim Group LLC. programming in C#,
            Javascript, SQL, NodeJS, Express, and React.
          </p>
          <p>
            I work in a team of like minded programmers who are always looking
            to automate and improve the workflow of not only us, but the
            employees of our firm.
          </p>
          <p>
            I live on (not in) Long Island, New York, and attended classes at
            Farmingdale State College for Computer Programming & Information
            Technology. I graduated in 2021 with a 3.9 GPA (so close!) and
            honors.
          </p>
          <p>
            When my head isn&apos;t buried in code and documentation, I love to
            go on long runs, listen to music, learn new technology, and tinker
            with hardware & reparing circuit boards with my trusty iron.
          </p>
          <p>
            And that&apos;s it for me. I&apos;m a simple person. I love my
            friends. I love my family.
          </p>
          <p>
            See some of my latest blog posts below, and check all of them out{" "}
            <Link href="/blog" legacyBehavior>
              <a>here</a>
            </Link>
            . Feel free to shoot me an email at bradleycaravana@gmail.com.
            Thanks for stopping by.
          </p>
        </div>
      </SectionAboutStyled>
      <SectionBlogPostStyled>
        <div className="blogSectionHeaderContainer">
          <h2 className="header">
            Latest Blog <span className="hl">Posts</span>
          </h2>
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
