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

// the cite tag is an inline element, and it can't have a line-height smaller than the line-height of the parent element. Have to define a line-height of the parents, header, and then the cite tag can be larger than that. Give the header a line-height that is small and adjust from there.
const HeaderStyled = styled.header`
  display: flex;
  
  justify-content: center;
  line-height: 1;
  flex-direction: column;
  margin: 1em 0 2em 0;

  .contentContainer {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    .titles {
      display: flex;
      flex-direction: column;
      gap: 1em;
      order: 2;
      align-items: center;
      margin: 1em 0 0 0;

      h1 {
        margin: 0;
        color: #fff;
      }

      cite.subHeader {
        margin: 0;  
        line-height: 1.4;
        color: #fff;
        font-size: 0.85rem;
      }

      .subHeaderTitles {
        color: ${({ theme }) => theme.dark.fg};
        margin: 0;
        font-size: 0.85rem;

        p {
          margin: .5em 0 0 0;
        }
      }
    }

    .imageBlock {
      order: 1;
      
    }
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    margin: 0;
    

    .contentContainer {
      width: 70%;
      flex-direction: row;
      gap: .45em;
      
      justify-content: center;

      .titles {
        order: 1;
        margin: 0;  
      }

      .imageBlock {
        order: 2;
        margin: 0;
      }
    }
    
  }

  @media (min-width: 1280px) and (max-width: 1650px) {
    .contentContainer {
      width: 50%;
    }
  }

  @media (min-width: 1651px) {

    .contentContainer {
      width: 35%;
      
      
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
      {/* <MainStyled>
        
      </MainStyled> */}
      <HeaderStyled>
        <div className='contentContainer'>
          <div className='titles'>
            <h1>Bradley <span className='hl'>Caravana</span></h1>
            <cite className='subHeader'>Manager of Web Development & Operations</cite>
            <div className='subHeaderTitles'>
              <p>And I know absolutely nothing about anything.</p>
              <p>But I&apos;m damn good at learning.</p>
            </div>
          </div>  
          <div className='imageBlock'>
            <Image
              placeholder="blur"
              src={headshot}
              width={250}
              height={250}
              alt="Photo of Bradley Caravana"
              className="img"
            />
          </div>
        </div>
      </HeaderStyled>
      <SectionAboutStyled>
        <h2>
          About <span className="hl">Me</span>
        </h2>
        <div className="textContainer">
          <p>
            Hey, my name is Bradley Caravana. I&apos;m the Manager of Web Development & Operations at
            Farmingdale State College where I oversee both a team, and the
            institution&apos;s web presence. I live on (not in) Long Island, New
            York.
          </p>
          {/* <p>
            I work in a team of like-minded programmers who are always looking
            to automate and improve the workflow of not only us, but the
            employees of our firm.
          </p> */}
          <p>I lead a team of developers that analyze our web data, update the website, and collaboarate with me on maintaining our platform while providing web-change support to multiple departments across campus. </p>
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
