import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard/PostCard";
import styled from "styled-components";
import SnippetCard from "@/components/SnippetCard/SnippetCard";
import { snippetsNames, snippetsDir } from "@/lib/namesAndPaths";
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

const SectionSnippetsStyled = styled.section`
  color: #fff;
  width: 90%;
  margin: 2em auto;

  .headerContainer h1 {
    text-align: center;
  }

  .snippetContainer {
    display: grid;
    gap: 1em;
  }

  @media (min-width: 440px) {
    .snippetContainer {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 600px) {
    .snippetContainer {
      grid-template-columns: repeat(3, 1fr);
    }
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

export default function Snippets({ snippets }) {
  return (
    <Layout title="Bradley Caravana | Snippets">
      <MainStyled>
        <div className="headerTitles">
          <h1>
            Bradley <span className="hl">Caravana</span>
          </h1>
          <cite className="subHeader">
            I&apos;m a Full Stack Developer at Maxim Group LLC.
          </cite>
          <div className="subHeaderBlock">
            <p>
              I can&apos;t even begin to tell you how many times I&apos;ve been
              developing, either by myself or at work with my co-workers, and I
              say &quot;hold on, I&apos;ve done this before. Let me find it
              somewhere!&quot; This page is that &quot;somewhere.&quot;
            </p>
            <p>
              This is a collection of snippets that I use semi-regularly, but
              can never remember off the top of my head. I have too much stuff
              in there already! Remembering the code to establish a trusted SQL
              connection in C# takes up way too much brain storage.
            </p>
            <p>Feel free to stea-- uhm. I mean, &quot;borrow,&quot; any.</p>
          </div>
        </div>
      </MainStyled>
      <SectionSnippetsStyled>
        <div className="headerContainer">
          <h1>
            Code <span className="hl">Snippets</span>
          </h1>
        </div>
        <div className="snippetContainer">
          {/* <SnippetCard title="Sort array of objects based on date" />
          <SnippetCard title="Sort array of objects based on date" />
          <SnippetCard title="Sort array of objects based on date" />
          <SnippetCard title="Sort array of objects based on date" />
          <SnippetCard title="Sort array of objects based on date" /> */}
          {snippets.map((snippet) => (
            <SnippetCard key={snippet.slug} snippet={snippet} />
          ))}
        </div>
      </SectionSnippetsStyled>
    </Layout>
  );
}

export async function getStaticProps() {
  // map through the post names
  let snippets = snippetsNames
    .map((name) => {
      // read the current file
      let text = fs.readFileSync(path.join(snippetsDir, `${name}`));

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
      snippets: JSON.parse(JSON.stringify(snippets)),
    },
  };
}
