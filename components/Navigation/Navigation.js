import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const NavStyled = styled.nav`
  color: #fff;
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
  margin-top: 2em;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    gap: 3em;
    width: 100%;
    justify-content: center;

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

  @media (max-width: ${({ theme }) => theme.md}) {
    display: none;
  }
`;

export default function Navigation() {
  const router = useRouter();
  return (
    <NavStyled>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a aria-current={router.pathname === "/" && "page"}>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/blog" legacyBehavior>
            <a aria-current={router.pathname.includes("/blog") && "page"}>
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio" legacyBehavior>
            <a aria-current={router.pathname === "/portfolio" && "page"}>
              Portfolio
            </a>
          </Link>
        </li>
        <li>
          <Link href="/snippets" legacyBehavior>
            <a aria-current={router.pathname === "/snippets" && "page"}>
              Snippets
            </a>
          </Link>
        </li>
      </ul>
    </NavStyled>
  );
}
