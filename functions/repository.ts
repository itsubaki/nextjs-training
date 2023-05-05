import { Repository } from "models/repository";

export async function getRepositories(login: string): Promise<Repository[]> {
    const repos: Repository[] = await fetch(
      `https://api.github.com/users/${encodeURI(login)}/repos?per_page=100`
    ).then((res) => {
      return res.json();
    });
  
    return repos;
  }
  