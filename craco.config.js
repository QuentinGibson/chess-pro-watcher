const { loaderByName, addBeforeLoader } = require('@craco/craco');
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer')
            ]

        }
    },
    webpack: {
        configure: function (webpackConfig) {
            const fragLoader = {
                test: /\.pgn$/,
                use: ['raw-loader']
            };

            addBeforeLoader(webpackConfig, loaderByName("file-loader"), fragLoader);

            return webpackConfig;
        }
    },
}