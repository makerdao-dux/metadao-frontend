/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    unoptimized: true
  },
  trailingSlash: true
  // webpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  //     config.target = "electron-renderer";
  //     config.output.globalObject = "this";
  //   } else {
  //     config.module.rules.push({
  //       test: path.resolve(__dirname, "../node_modules/electron"),
  //       use: "null-loader",
  //     });
  //     config.optimization.minimizer = [];
  //   }
    
  //   return config;
  // },
}

module.exports = nextConfig


