import Link from "next/link";
import { Repository } from "models/repository";
import { Languages } from "models/language";
import { Usage } from "components/profile/Lang";
import style from "styles/repository/details.module.css";

export function Details({
  repo,
  languages,
  login,
}: {
  repo: Repository;
  languages: Languages;
  login: string;
}) {
  return (
    <div>
      <h2 className={style.heading}>
        {repo.fork ? "ψ" : "🔖"}{" "}
        <Link href="/me">
          <a className={style.link}>{login}</a>
        </Link>
        {"/"}
        <Link href={repo.html_url}>
          <a className={style.link}>{repo.name}</a>
        </Link>{" "}
        {repo.archived ? "(archived)" : null}
      </h2>

      <div>
        <p>{repo.description}</p>
        <p>{repo.license === null ? null : "⚖" + repo.license.name}</p>
        <p>
          {"☆"}
          {repo.stargazers_count}{" "}
          {repo.stargazers_count === 1 ? "star" : "stars"} {"ψ"}
          {repo.forks} {repo.forks === 1 ? "fork" : "forks"}
        </p>
        <p>Languages</p>
        <p>{Usage(languages)}</p>
      </div>
    </div>
  );
}
