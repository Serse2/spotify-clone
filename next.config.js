/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'res.cloudinary.com',
      'i.scdn.co',
      'lineup-images.scdn.co',
      'mosaic.scdn.co',
      'newjams-images.scdn.co',
      'image-cdn-ak.spotifycdn.com'
    ]
  },
  env: {
    NEXTBASE_URL: process.env.NEXTBASE_URL
  }
}

module.exports = nextConfig
