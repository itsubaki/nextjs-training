import { Repository } from "models/repository"
import { Pinned } from 'components/profile/Pinned'
import style from 'styles/profile/pinnedlist.module.css'

export function PinnedList({ repos }: { repos: Repository[] }) {
    repos.sort((a: Repository, b: Repository) => {
        if (a.stargazers_count < b.stargazers_count) {
            return 1
        }

        return -1
    })

    return (
        <div>
            <div className={style.title}>
                Pinned
            </div>
            <div className={style.list}>
                {repos.map((repo: Repository) => {
                    return (
                        <div key={repo.id} className={style.item}>
                            <Pinned repo={repo} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
