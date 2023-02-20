import { useState } from "react";
import Link from "next/link";

export default function MobileNagivation() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div id="menu-wrap" className={`${isActive ? "close" : ""}`}>
        <div
          className="burger-container"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="line-1 line"></div>
          <div className="line-2 line"></div>
          <div className="line-3 line"></div>
        </div>

        <div className={`menu ${isActive ? "visible" : ""}`}>
          <div className={`scaler ${isActive ? "enlarge" : ""}`}>
            <div className={`list-container ${isActive ? "fade" : ""}`}>
              <ul className="main-list">
                <li className="list-item">
                  <Link href="/" legacyBehavior>
                    <a>Home</a>
                  </Link>
                </li>

                <li className="list-item">
                  <Link href="/blog" legacyBehavior>
                    <a>Blog</a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/portfolio" legacyBehavior>
                    <a>Portfolio</a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/snippets" legacyBehavior>
                    <a>Snippets</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
