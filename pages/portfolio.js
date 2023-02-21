import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard/PostCard";
import styled from "styled-components";
import useStore from "@/src/store";

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

const SectionReposStyled = styled.section``;

export default function Portfolio() {
  const repos = useStore((state) => state.repos);
  console.log(repos);
  // GRAB FROM REPOS:
  // url
  // owner.login
  // owner.avatar_url (maybe, this one is an image)
  // name
  // language (use a switch case for this and show something depending on the language)
  // description
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
            <p>
              Alright, let&apos;s address the elephant in the room. I re-build
              my website a lot. But that&apos;s for a couple of reasons.
            </p>
            <p>
              As I&apos;ve mentioned before, I love to build and learn. I come
              across new technologies, and I say to myself &quot;I&apos;d love
              to build my next website with this.&quot; It&apos;s a sickness,
              really. But that&apos;s because I&apos;m never happy with what I
              build, and I think a lot of other developers feel the same way.
              We&apos;re always trying to improve and look for new things to
              tinker with.
            </p>
            <p>
              This is why a lot of the repos I have on Github are old websites.
              But there&apos;s a couple of funny party trick apps in there as
              well. Most of my time is spent developing for work. Making more
              projects to stick on GitHub is always a goal of mine I&apos;m
              trying to reach. Feel free to download some of my projects and
              take a look around.
            </p>
          </div>
        </div>
      </MainStyled>
      <SectionReposStyled>
        <h2>
          GitHub <span className="hl">Repos</span>
        </h2>
        {repos.length !== 0 &&
          repos.map((repo) => <p key={repo.id}>{repo.name}</p>)}
      </SectionReposStyled>
    </Layout>
  );
}
