module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["www.facebook.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/tr",
      },
    ],
  },
  // webpack: (config: import('webpack').Configuration) => {
  //   if (config.module && config.module.rules) {
  //     config.module.rules.push({
  //       test: /\.node$/,
  //       use: "node-loader",
  //     });
  //   }
  //   return config;
  // },
};
