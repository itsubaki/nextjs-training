import { use } from "react";
import { Repository } from "models/repository";
import { getRepositories } from "functions/repository";

const login: string = "itsubaki";

export default function Page() {
  const repos: Repository[] = use(getRepositories(login));
  repos.sort((a: Repository, b: Repository) => {
    if (a.pushed_at < b.pushed_at) {
      return 1;
    }

    return -1;
  });

  return (
    <div>
        {repos.map((repo) => {
          return (
            <div key={repo.id}>
              {repo.name}: {repo.description} {repo.language} {repo.stargazers_count} {repo.forks}
            </div>
          );
        })}
    </div>
  );
}

