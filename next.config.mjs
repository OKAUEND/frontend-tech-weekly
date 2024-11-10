import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["tsx", "mdx", "md"],
  eslint: {
    dirs: ["src"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
