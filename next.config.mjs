/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
        ppr: 'incremental',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent.fdad3-1.fna.fbcdn.net',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
};

export default nextConfig;
