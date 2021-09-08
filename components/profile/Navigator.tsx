import Link from "next/link";
import style from "styles/profile/navigator.module.css";

export function Navigator({ repos }: { repos: number }) {
  return (
    <span className={style.container}>
      <span className={style.item}>
        <Link href="/me">
          <a>
            <p>
              <span className={style.icon}>📖</span> Overview
            </p>
          </a>
        </Link>
      </span>

      <span className={style.item}>
        <Link href="/me?tab=repositories">
          <a>
            <p>
              <span className={style.icon}>🔖</span> Repositories{" "}
              <span className={style.counter}>{repos}</span>
            </p>
          </a>
        </Link>
      </span>

      <span className={style.item}>
        <Link href="/me?tab=projects">
          <a>
            <p>
              <span className={style.icon}>🗓</span> Projects
            </p>
          </a>
        </Link>
      </span>

      <span className={style.item}>
        <Link href="/me?tab=packages">
          <a>
            <p>
              <span className={style.icon}>🎁</span> Packages
            </p>
          </a>
        </Link>
      </span>
    </span>
  );
}
