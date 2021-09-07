module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'github-readme-stats.vercel.app',
        ],
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/me',
            permanent: true,
        }, ]
    }
}
