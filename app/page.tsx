import { Repository } from "models/repository";
import { getRepositories } from "functions/repository";

const login: string = "itsubaki";

export default async function Page() {
  const repos: Repository[] = await getRepositories(login);
  repos.sort((a: Repository, b: Repository) => {
    if (a.pushed_at < b.pushed_at) {
      return 1;
    }

    return -1;
  });

  return (
    <div>
      <h1>repository</h1>
      <div>
        {repos.map((repo) => {
          return (
            <div key={repo.id}>
              {repo.name}: {repo.description} {repo.language} {repo.stargazers_count} {repo.forks}
            </div>
          );
        })}
      </div>
    </div>
  );
}

