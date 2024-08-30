/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vvwohn98mnp3isif.public.blob.vercel-storage.com',
                port: '',
            },
        ],

    },
    // logging: {
    //     level: 'debug',
    //     fetches: {
    //         fullUrl: true,
    //     }
    // },
};

export default nextConfig;
