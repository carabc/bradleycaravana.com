import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavStyled = styled.nav`
  color: #fff;
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 2em;

  ul {
    display: flex;
    list-style: none;
    margin: 0 auto;
    gap: 3em;
    width: 100%;
    justify-content: center;
    padding: 0;

    li {
      padding: 0.25em 1em;
      transition: all 0.1s;
      border-radius: 10px;
      &:hover {
        background: ${({ theme }) => theme.dark.hover};
      }
      a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;

        &[aria-current="page"] {
          color: ${({ theme }) => theme.dark.hl};
        }
      }
    }
  }

  @media(min-width: ${({ theme }) => theme.md}) {
    width: 70%;
  }

  @media (min-width: 1280px) and (max-width: 1650px) {
    width: 50%;
  }

  @media (min-width: 1651px) {
    width: 30%;
  }

  

  @media (max-width: 767px) {
    display: none;
  }
`;

export default function Navigation() {
  const pathName = usePathname();

  return (
      <NavStyled>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a aria-current={pathName === "/" && "page"}>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/blog" legacyBehavior>
              <a aria-current={pathName.includes("/blog") && "page"}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio" legacyBehavior>
              <a aria-current={pathName === "/portfolio" && "page"}>
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/snippets" legacyBehavior>
              <a aria-current={pathName.includes("/snippets") && "page"}>
                Snippets
              </a>
            </Link>
          </li>
        </ul>
      </NavStyled>
  );
}
