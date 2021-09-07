import { useRouter } from 'next/router'
import { Repository } from 'models/repository'
import { Languages } from 'models/language'
import { HTMLHead as Head, login, siteTitle } from 'components/Head'
import { Header } from 'components/Header'
import { Details } from 'components/repository/Details'
import { getRepositories, getRepository } from 'functions/repository'
import style from 'styles/layout.module.css'

export default function Repo({ repo, languages }: { repo: Repository, languages: Languages }) {
    const router = useRouter()
    if (router.isFallback) {
        return <div></div>
    }

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div>
                <Header />
                <div className={style.container}>
                    <div className={style.main}>
                        <Details
                            repo={repo}
                            languages={languages}
                            login={login}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const repos: Repository[] = await getRepositories(login)
    repos.sort((a: Repository, b: Repository) => {
        if (a.pushed_at < b.pushed_at) {
            return 1
        }

        return -1
    })

    const top: Repository[] = repos.slice(0, 1)
    const paths: { params: { name: string } }[] = top.map((repo: Repository) => {
        return { params: { name: `${repo.name}` } }
    })

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }: { params: { name: string } }) {
    const repo: Repository = await getRepository(login, params.name)
    if (!repo) {
        return {
            notFound: true
        };
    }

    const languages: Languages = await fetch(repo.languages_url)
        .then((res) => {
            return res.json()
        })

    return {
        props: {
            repo: repo,
            languages: languages,
        },
        revalidate: 3600,
    }
}
