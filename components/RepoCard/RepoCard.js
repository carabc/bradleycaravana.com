import styled from "styled-components";

const DivRepoContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.75em 0;
  border-bottom: 1px solid ${({ theme }) => theme.dark.border};
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(101%);
    transition: all 0.2s ease-in-out;
  }
  .nameContainer {
    font-weight: bold;
    font-size: 0.8em;
  }

  .descriptionContainer {
    color: ${({ theme }) => theme.dark.fg};
    font-size: 0.8em;
  }

  .flexChildContainer .ownerContainer,
  .flexChildContainer .languageContainer {
    text-align: right;
  }

  .ownerContainer {
    font-size: 0.8em;
  }

  .languageContainer {
    font-size: 0.8em;
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    .descriptionContainer,
    .nameContainer,
    .ownerContainer,
    .languageContainer {
      font-size: 0.9em;
    }
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    .descriptionContainer,
    .nameContainer,
    .ownerContainer,
    .languageContainer {
      font-size: 1em;
    }
  }
`;

export default function RepoCard({ repo }) {
  // UI ITEMS
  // name, owner, language, description
  // OTHER ITEMS
  // url

  let handleClick = () => {
    // let link = document.createElement("a");
    // link.href = repo.html_url;
    // link.click();
    window.open(repo.html_url, "_blank");
  };

  return (
    <DivRepoContainerStyled onClick={handleClick}>
      <div className="flexChildContainer">
        <div className="nameContainer">{repo.name}</div>
        <div className="descriptionContainer">{repo.description || "N/A"}</div>
      </div>
      <div className="flexChildContainer">
        <div className="ownerContainer">{repo.owner.login}</div>
        <div className="languageContainer">{repo.language || "N/A"}</div>
      </div>
    </DivRepoContainerStyled>
  );
}
