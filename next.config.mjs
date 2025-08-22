/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 临时添加 basePath，配置好域名后可以删除
  basePath: '/openwidget',
  assetPrefix: '/openwidget/',
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
