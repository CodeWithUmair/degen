/** @type {import('next').NextConfig} */
const nextConfig = {
   output:"export",
    images: {
        unoptimized:true,
        domains: ['gateway.pinata.cloud'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'img.reservoir.tools',
              port: '',
              pathname: '/images/v2/mainnet/**',
            },
          ],
    },
    
 
}

module.exports = nextConfig
