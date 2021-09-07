import { HTMLHead as Head, siteTitle } from 'components/Head'

export default function Index({ }) {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
        </>
    )
}
