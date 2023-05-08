import { Repository } from "models/repository";
import { getRepositories } from "functions/repository";

const login: string = "itsubaki";

export default async function Page({ params }: { params: { name: string } }) {
  return <div>repos/[name]/page.tsx: {params.name}</div>;
}

export async function generateStaticParams() {
  const repos: Repository[] = await getRepositories(login);
  return repos.map((repo) => ({ name: repo.name }));
}
