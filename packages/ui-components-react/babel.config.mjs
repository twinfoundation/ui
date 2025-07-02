// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        dev: process.env.NODE_ENV === 'development',
        styleResolution: 'application-order'
      }
    ]
  ]
}; 