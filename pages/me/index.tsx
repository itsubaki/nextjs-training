import { useRouter } from "next/router";
import { useSearch } from "hooks/search";
import { Profile as ProfileIF } from "models/profile";
import { Repository } from "models/repository";
import { getProfile } from "functions/profile";
import { getRepositories, getPinnedList } from "functions/repository";
import { HTMLHead as Head, login, siteTitle } from "components/Head";
import { Header } from "components/Header";
import { Profile } from "components/profile/Profile";
import { Navigator } from "components/profile/Navigator";
import { List } from "components/profile/List";
import { Search } from "components/profile/Search";
import { Stats } from "components/profile/Stats";
import { PinnedList } from "components/profile/PinnedList";
import style from "styles/layout.module.css";

export default function Index({
  profile,
  repos,
}: {
  profile: ProfileIF;
  repos: Repository[];
}) {
  const canonical: string = `https://${encodeURI(siteTitle)}/me`;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="canonical" href={canonical} />
      </Head>

      <div>
        <Header />
        <div className={style.container}>
          <div className={style.profile}>
            <Profile profile={profile} />
          </div>

          <div className={style.main}>
            <Navigator repos={profile.public_repos} />
            <MainPage profile={profile} repos={repos} />
          </div>
        </div>
      </div>
    </>
  );
}

function MainPage({
  profile,
  repos,
}: {
  profile: ProfileIF;
  repos: Repository[];
}) {
  const router = useRouter();
  const { tab } = router.query;

  if (router.isFallback) {
    return <div></div>;
  }

  switch (tab) {
    case "repositories":
      return <Searched repos={repos} />;
    case "projects":
      return <Projects />;
    case "packages":
      return <Packages />;
    default:
      return <Overview profile={profile} repos={repos} />;
  }
}

function Searched({ repos }: { repos: Repository[] }) {
  const [searched, setSearch] = useSearch(repos);

  return (
    <div>
      <Search setSearch={setSearch} />
      <List repos={searched} />
    </div>
  );
}

function Overview({
  profile,
  repos,
}: {
  profile: ProfileIF;
  repos: Repository[];
}) {
  return (
    <>
      <div className={style.stats}>
        <Stats login={profile.login} />
      </div>
      <div className={style.pinned}>
        <PinnedList repos={getPinnedList(repos)} />
      </div>
    </>
  );
}

function Packages() {
  return (
    <>
      <p>Get started with GitHub Packages</p>
    </>
  );
}

function Projects() {
  return (
    <>
      <p>You don&#39;t have any projects yet.</p>
    </>
  );
}

export async function getStaticProps() {
  const profile: ProfileIF = await getProfile(login);
  const repos: Repository[] = await getRepositories(login);

  return {
    props: {
      profile: profile,
      repos: repos,
    },
    revalidate: 3600,
  };
}
