import styled from "styled-components";
import { withTheme } from "styled-components";
import { AiOutlineEye } from "react-icons/ai";

const PostCardContainer = styled.div`
  padding: 0.2em;
  border-radius: 10px;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.dark.hl} 0%, ${theme.dark.fg} 95%)`};
  transition: all 0.1s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(101%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .cardInner {
    background-color: ${({ theme }) => theme.dark.bg};
    border-radius: 10px;
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    gap: 2em;

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

      .viewCount {
        display: flex;

        align-items: center;
        gap: 0.25em;
      }
    }
  }
`;

export default withTheme(function PostCard({ post }) {
  return (
    <PostCardContainer>
      <div className="cardInner">
        <div className="postHeader">
          <h3>{post?.frontmatter.title}</h3>
        </div>

        <div className="postFooter">
          {/* <p className="author">By: Bradley Caravana</p> */}
          <p className="date">{post?.frontmatter.date}</p>
          <p className="viewCount">
            <AiOutlineEye size={20} />
            100
          </p>
        </div>
      </div>
    </PostCardContainer>
  );
});
