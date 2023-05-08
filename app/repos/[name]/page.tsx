import { Repository } from "models/repository";
import { getRepositories } from "functions/repository";

const login: string = "itsubaki";

// https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating
export const revalidate = 60;

export default async function Page({ params }: { params: { name: string } }) {
  return <div>repos/[name]/page.tsx: {params.name}</div>;
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const repos: Repository[] = await getRepositories(login);
  return repos.map((repo) => ({ name: repo.name }));
}
