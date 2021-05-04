import { useRouter } from "next/router";
import { SignInButton } from "./SignInButton";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ActiveLink } from "./SignInButton/ActiveLink";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img
          src="/images/logo.svg"
          alt="pedro.news"
          className={styles.pageLogo}
        />
        <nav className={styles.pageNav}>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
