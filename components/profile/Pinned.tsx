import Link from "next/link"
import { Repository } from "models/repository"
import { Color } from 'components/profile/Lang'
import style from 'styles/profile/pinned.module.css'

export function Pinned({ repo }: { repo: Repository }) {
    return (
        <div key={repo.id} className={style.item}>
            <h3>
                {repo.fork ? "ψ" : "🔖"}
                {" "}
                <Link href="/me/[repo.name]" as={`/me/${repo.name}`}>
                    <a className={style.link}>
                        {repo.name}
                    </a>
                </Link>
                {" "}
                {repo.archived ? "(archived)" : null}
            </h3>

            <p>{repo.description}</p>

            <p>
                {Color(repo.language)}
                {" "}
                {repo.language === null ? null : repo.language}
                {" "}
                {repo.stargazers_count === 0 ? null : "☆" + repo.stargazers_count}
                {" "}
                {repo.forks === 0 ? null : "ψ" + repo.forks}
            </p>
        </div>
    )
}
