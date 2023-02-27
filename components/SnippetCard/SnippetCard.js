import styled from "styled-components";
import { withTheme } from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";

const SnippetCardContainer = styled.div`
  padding: 0.2em;
  border-radius: 10px;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.dark.hl} 0%, ${theme.dark.fg} 95%)`};
  transition: all 0.1s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(101%);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
    color: #fff;
  }

  .snippetInner {
    background-color: ${({ theme }) => theme.dark.bg};
    border-radius: 10px;
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    height: 100%;
    justify-content: space-between;

    .snippetHeader {
      h3 {
        margin: 0;
        font-size: 0.9em;
      }
    }

    .viewCount {
      display: flex;

      align-items: center;
      gap: 0.25em;
    }
  }

  span.language {
    padding: 0.2em 0.5em;
    border-radius: 5px;
    font-size: 0.8em;
  }

  .js {
    background: #fcdc00;
    color: ${({ theme }) => theme.dark.fg};
  }

  .cplusplus {
    background: #004488;
    color: #fff;
  }

  .csharp {
    background: #0086dc;
    color: #fff;
  }

  .sql {
    background: #2b5d80;
    color: #fff;
  }

  .bash {
    background: #000000;
    color: #fff;
  }

  .react {
    background: #61dafb;
    color: #fff;
  }

  .jsx {
    background: #61dafb;
    color: #fff;
  }

  .npm {
    background: #c8304c;
    color: #fff;
  }

  .nodejs {
    background: #026e00;
    color: $fff;
  }

  @media (min-width: 768px) {
    .snippetInner {
      .snippetHeader {
        h3 {
          font-size: 1em;
        }
      }
    }
  }
`;

export default withTheme(function SnippetCard({ snippet }) {
  let getClassName = (language) => {
    switch (language) {
      case "JavaScript":
        return "js";
      case "C#":
        return "csharp";
      case "C++":
        return "cplusplus";
      case "SQL":
        return "sql";
      case "Bash":
        return "bash";
      case "React":
        return "react";
      case "JSX":
        return "jsx";
      case "NPM":
        return "npm";
      case "NodeJS":
        return "nodejs";
      default:
        return "";
    }
  };

  return (
    <SnippetCardContainer>
      <Link href={`/snippets/${snippet.slug}`} className="link">
        <div className="snippetInner">
          <div className="snippetHeader">
            <h3>{snippet?.frontmatter.title}</h3>
          </div>
          <div className="postFooter">
            <span
              className={`language ${getClassName(snippet.frontmatter.tag)}`}
            >
              {snippet.frontmatter.tag}
            </span>
          </div>
        </div>
      </Link>
    </SnippetCardContainer>
  );
});
