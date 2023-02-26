import { useEffect } from "react";
import fs from "fs";
import path from "path";
import { snippetsNames, snippetsDir } from "@/lib/namesAndPaths";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import styled from "styled-components";
import Layout from "@/components/Layout";
import { useSWRConfig } from "swr";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Link from "next/link";
import Test from "@/components/Test";
const MainStyled = styled.main`
  width: 90%;
  margin: 0 auto;

  .headerTitles cite {
    display: block;
  }

  .headerTitles h1,
  .headerTitles cite,
  .headerTitles .backBtn {
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

const SectionSnippet = styled.section`
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

let components = { Test };

export default function Snippet({ frontmatter, mdxSource, slug }) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_VIEW_ROUTE}/${slug}`,
    fetcher,
  );
  const { mutate } = useSWRConfig();

  useEffect(() => {
    let canPost = true;
    const postRequest = async () => {
      await fetch(`${process.env.NEXT_PUBLIC_VIEW_ROUTE}/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(slug),
      });
      mutate(`${process.env.NEXT_PUBLIC_VIEW_ROUTE}/${slug}`, {
        revalidate: true,
        populateCache: true,
      });
    };
    if (canPost) postRequest();
    return () => {
      canPost = false;
    };
  }, []);

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
        </div>
      </MainStyled>
      <SectionSnippet>
        <div className="headerContainer">
          <h1>{frontmatter.title}</h1>
        </div>
        <div className="snippetContainer">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </SectionSnippet>
    </Layout>
  );
}

export async function getStaticPaths() {
  // have to get the slugs for each post
  // NextJS has to render each page on build time
  // this page is dynamic since it uses a slug in the url
  // NextJS needs all the slugs to render this page at build time
  // return an array of objects structured like this:
  /*
    paths: [
      {
        params: {
          slug: post-one
        }
      }
    ]
  */
  // map through the post names
  const paths = snippetsNames.map((name) => {
    // read each file
    let content = fs.readFileSync(path.join(snippetsDir, name));
    // get the slug based off of the file name
    let slug = name.replace(".mdx", "");
    // return the slug like below:
    /*
        return {
          params: {
            slug
          }
        }
      */
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // NextJS is going to run this function n times, equal to the amount of slugs that were grabbed from the getStaticPaths() function above
  // A single slug is passed into the context variable
  let slug = context.params.slug;
  // find the specific file using this unqiue slug and readFileSync
  let text = fs.readFileSync(path.join(snippetsDir, slug + ".mdx"), "utf8");
  // grab the frontmatter and the content for this file
  let { data: frontmatter, content } = matter(text);
  // serialize the markdown so we can pass it to MDXRemote in the component
  let mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
      slug,
    },
  };
}
