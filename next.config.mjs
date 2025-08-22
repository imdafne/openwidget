/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 使用自定义域名 openwidget.net，不需要 basePath
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
