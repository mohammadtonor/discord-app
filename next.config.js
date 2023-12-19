/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    return config;
  },
};
