const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@web3auth/modal": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "@web3auth/base": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "@web3auth/base-provider": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "@web3auth/single-factor-auth": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "@walletconnect/modal": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "@walletconnect/sign-client": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "magic-sdk": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "@magic-ext/algorand": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "lute-connect": path.resolve(__dirname, 'src/lib/lute-bridge.ts'),
      "@perawallet/connect-beta": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "@algorandfoundation/liquid-auth-use-wallet-client": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
      "daffi-connect": path.resolve(__dirname, 'src/lib/dummy-module.ts'),
    };
    return config;
  },
  async rewrites() {
    return {
      beforeFiles: [
        // 1. Hardcoded diagnostic route to bypass wildcard parsing completely
        {
          source: '/api/health',
          destination: 'http://140.245.250.20:3001/api/health',
        },
        // 2. Dynamic catch-all rule for the rest of your system
        {
          source: '/api/:path*',
          destination: 'http://140.245.250.20:3001/api/:path*',
        },
      ],
    };
  },
}

module.exports = nextConfig;