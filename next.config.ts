import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'www.septichow.com' }],
      destination: 'https://septichow.com/:path*',
      permanent: true,
    }];
  },
};

export default config;
