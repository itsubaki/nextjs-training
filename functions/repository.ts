import { Repository } from "models/repository";

export async function getRepository(
  login: string,
  name: string
): Promise<Repository> {
  const repo: Repository = await fetch(
    `https://api.github.com/repos/${encodeURI(login)}/${encodeURI(name)}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });

  return repo;
}

export async function getRepositories(login: string): Promise<Repository[]> {
  const repos: Repository[] = await fetch(
    `https://api.github.com/users/${encodeURI(login)}/repos?per_page=100`
  ).then((res) => {
    return res.json();
  });

  return repos;
}

export function getPinnedList(repos: Repository[]): Repository[] {
  // TODO use api
  const names: string[] = [
    "q",
    "qasm",
    "gostream",
    "gostruct",
    "rsa",
    "cracking-the-coding-interview",
  ];

  const pinned: Repository[] = repos.filter(
    (repo) => names.indexOf(repo.name) > -1
  );

  return pinned;
}
