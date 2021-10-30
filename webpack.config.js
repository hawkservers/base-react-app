const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode !== 'production';

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
      main: ['./src/index.tsx', './src/Styles/style.css'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: path.join(__dirname, 'src'),
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json',
                transpileOnly: true,
                ...(isDevelopment && {
                  getCustomTransformers: () => ({
                    before: [ReactRefreshTypeScript()],
                  }),
                }),
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      isDevelopment && new ReactRefreshPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: './index.html',
        template: './public/index.html',
      }),
    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    devServer: {
      historyApiFallback: true,
    },
  };
};
