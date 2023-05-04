import Head from "next/head";

export const login: string = "itsubaki";
export const siteTitle: string = `nextjs12-training`;

export function HTMLHead({ children }: any) {
  return (
    <Head>
      {children}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/profile.png"
      ></link>
      <meta name="og:title" content={siteTitle} />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
    </Head>
  );
}
