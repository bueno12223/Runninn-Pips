require('ignore-styles')

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'svg'],
  name: '/assets/[hash].[ext]'
})

require('./server')
