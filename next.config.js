const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        scrollRestoration: true
    },
    compiler: {
        removeConsole: true,
      },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: [
            'cdn2.trenderapp.com',
            'cdn.trenderapp.com',
            'cdn.boteric.fr'
        ]
    }
  }

module.exports = nextConfig