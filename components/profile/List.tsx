import Link from "next/link";
import { Repository } from "models/repository";
import { Color } from "components/profile/Lang";
import style from "styles/profile/list.module.css";

export function List({ repos }: { repos: Repository[] }) {
  repos.sort((a: Repository, b: Repository) => {
    if (a.pushed_at < b.pushed_at) {
      return 1;
    }

    return -1;
  });

  return (
    <div>
      {repos.map((repo: Repository) => {
        return (
          <div key={repo.id} className={style.item}>
            <Link href="/me/[repo.name]" as={`/me/${repo.name}`}>
              <a className={style.link}>
                <span className={style.name}>{repo.name}</span>
              </a>
            </Link>{" "}
            {repo.archived ? "(archived)" : null}
            <div className={style.description}>{repo.description}</div>
            <p>
              {Color(repo.language)}{" "}
              {repo.language === null ? null : repo.language}{" "}
              {repo.stargazers_count === 0 ? null : "☆" + repo.stargazers_count}{" "}
              {repo.forks === 0 ? null : "ψ" + repo.forks}{" "}
              {repo.license === null ? null : "⚖" + repo.license.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
