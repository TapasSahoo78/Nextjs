/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   DB_HOST: process.env.DB_HOST,
  // },
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true
      },
    ]
  }
}


module.exports = nextConfig;
