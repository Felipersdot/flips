const webpack = require('webpack');

module.exports = function override(config) {
    // Update resolve alias or modules as necessary
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.resolve.alias,
            // Add aliases if needed
        },
        modules: [
            ...(config.resolve.modules || []),
            // Add additional module paths if needed
        ],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'], // Example of setting extensions
        plugins: [
            ...(config.resolve.plugins || []),
            // Add any additional plugins if necessary
        ],
        fallback: {
            ...config.resolve.fallback,
            "stream": require.resolve("stream-browserify"), // Fallback for 'stream'
            "crypto": require.resolve("crypto-browserify"),  // Fallback for 'crypto'
            "vm": require.resolve("vm-browserify")

        }
    };

    // Update plugins to provide global modules
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ]);
    return config;
};
