/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
}
  // i18n: {
  //   locales: ["en", "pl"],
  //   defaultLocale: "pl",
  //   localeDetection: false
  // }
};
export default nextConfig