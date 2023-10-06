module.exports = {
  reactStrictMode: false,
    images: {

      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'tailwindui.com',
              port: '',
              pathname: '/img/ecommerce-images/**',
          },
          {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'unsplash.com',
              port: '',
              pathname: '/photos/**',
          },

        ],

    },
}
