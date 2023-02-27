import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard/PostCard";
import { postNames, postsDir } from "@/lib/namesAndPaths";
import styled from "styled-components";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export default function Blog({ posts }) {
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
              I&apos;ll be posting about anything and everything, not just code
              (I hope).I started my first blog back in the summer of 2020 when I
              really hit the ground running with being a developer. I dove
              head-first into front-end frameworks, templating engines, APIs,
              NodeJS, Express, and ORMs.
            </p>
            <p>
              This website/blog gives me an excuse to build something that will
              benefit me in more ways than one. I love learning how to build new
              things.
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
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionAllPosts>
    </Layout>
  );
}

export async function getStaticProps() {
  // map through the post names
  let posts = postNames
    .map((name) => {
      // read the current file
      let text = fs.readFileSync(path.join(postsDir, `${name}`));

      // get the frontmatter and content from the text
      const { data: frontmatter } = matter(text);
      // get the slug
      let slug = name.replace(".mdx", "");
      // return the frontmatter and slug for each file
      return {
        frontmatter,
        slug,
      };
    })
    .sort((a, b) => {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    });

  // return the array of objects, each object containing the file content and the frontmatter for a post, as props to the react component
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
