import styled from "styled-components";
import ViewCounter from "../ViewCounter/ViewCounter";
import Link from "next/link";
const PostCardContainer = styled.div`
  padding: 0.2em;
  margin: 0 0 1em 0;
  border-radius: 10px;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.dark.hl} 0%, ${theme.dark.fg} 95%)`};
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(101%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
    color: #fff;
  }

  .cardInner {
    background-color: ${({ theme }) => theme.dark.bg};
    border-radius: 10px;
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    height: 100%;

    .postHeader {
      h3 {
        margin: 0;
      }
    }

    .postFooter {
      display: flex;
      flex-direction: column;

      p {
        margin: 0;
      }
    }
  }
`;

export default function PostCard({ post, showDesc }) {
  return (
    <PostCardContainer>
      <Link href={`/blog/${post?.slug}`} className="link">
        <div className="cardInner">
          <div className="postHeader">
            <h3>{post?.frontmatter.title}</h3>
          </div>
          {showDesc && (
            <div className="postBody">
              <p>{post.frontmatter.description}</p>
            </div>
          )}

          <div className="postFooter">
            <p className="date">{post?.frontmatter.date}</p>
            <ViewCounter slug={post?.slug} />
          </div>
        </div>
      </Link>
    </PostCardContainer>
  );
}

PostCard.defaultProps = {
  showDesc: false,
};
