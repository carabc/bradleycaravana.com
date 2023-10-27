import { useEffect } from "react";
import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import headshot from "../public/images/headshot.png";
import PostCard from "@/components/PostCard/PostCard";
import Link from "next/link";
import { postNames } from "@/lib/namesAndPaths";
import { postsDir } from "@/lib/namesAndPaths";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

    .img {
      user-select: none;
    }
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
    h2 {
      text-align: initial;
    }
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
    display: grid;

    gap: 1em;
  }

  @media (min-width: 440px) {
    .cardContainer {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    width: 70%;

    .header {
      text-align: initial;
    }
    .cardContainer {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    margin: 2em auto 0 auto;
  }

  @media (min-width: 1280px) and (max-width: 1650px) {
    width: 50%;
  }

  @media (min-width: 1651px) {
    width: 30%;
  }
`;

export default function Home({ posts }) {
  return (
    <Layout>
      <MainStyled>
        <div className="headerTitles">
          <h1>
            Bradley <span className="hl">Caravana</span>
          </h1>
          <cite className="subHeader">
            {/* I&apos;m a Full Stack Developer at Maxim Group LLC. */}
            I&apos;m the Manager of Web Development &amp; Operations at Farmingdale State College.
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
            className="img"
          />
        </div>
      </MainStyled>
      <SectionAboutStyled>
        <h2>
          About <span className="hl">Me</span>
        </h2>
        <div className="textContainer">
          <p>
            Hey, my name is Bradley Caravana. I&apos;m a Full Stack Developer at
            Farmingdale State College where I manage a team and the
            institution&apos;s web presence. I live on (not in) Long Island, New
            York.
          </p>
          <p>
            I work in a team of like-minded programmers who are always looking
            to automate and improve the workflow of not only us, but the
            employees of our firm.
          </p>
          <p>
            When my head isn&apos;t buried in code and documentation, I love to
            go on long runs, listen to music, learn new technology, and tinker
            with hardware & repair circuit boards with my trusty iron.
          </p>
          <p>See some of my latest blog posts below.</p>
        </div>
      </SectionAboutStyled>
      <SectionBlogPostStyled>
        <div className="blogSectionHeaderContainer">
          <h2 className="header">
            Latest Blog <span className="hl">Posts</span>
          </h2>
        </div>
        <div className="cardContainer">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionBlogPostStyled>
    </Layout>
  );
}

export async function getStaticProps() {
  // need to get the frontmatter for the most recent 3 posts
  const posts = postNames
    .map((name) => {
      let text = fs.readFileSync(path.join(postsDir, `${name}`));
      let { data: frontmatter } = matter(text);
      let slug = name.replace(".mdx", "");

      return {
        frontmatter,
        slug,
      };
    })
    .sort((a, b) => {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    })
    .slice(0, 3);

  return {
    props: {
      posts,
    },
  };
}
