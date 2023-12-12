/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gits.id',
                port: '',
                // pathname: '/account123/**',
            },
        ],
    },
}

module.exports = nextConfig
