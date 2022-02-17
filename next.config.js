module.exports = {
  async rewrites() {
    return process.env.NODE_ENV !== 'production' ? [
      // Do not rewrite API routes
      {
        source: '/api/:any*',
        destination: 'http://localhost:3000/api/:any*',
      },
      // Rewrite everything else to use `pages/index`
      {
        source: '/:any*',
        destination: '/',
      },
    ] : [
      // Do not rewrite API routes
      {
        source: '/api/:any*',
        destination: '/api/:any*',
      },
      // Rewrite everything else to use `pages/index`
      {
        source: '/:any*',
        destination: '/',
      },
    ]
  },
}