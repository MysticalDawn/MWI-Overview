import { Loader } from "lucide-react";
import test from "node:test";
import { use } from "react";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // add support for mp4
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/", // Where the files will be served from
          outputPath: "static/videos/", // Where the files will be output in the build folder
          name: "[name].[hash].[ext]", // Naming convention of the output files
        },
      },
    });
    return config;
  },
};

export default nextConfig;
