module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["github-readme-stats.Vercel.app"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/me",
        permanent: true,
      },
    ];
  },
};
