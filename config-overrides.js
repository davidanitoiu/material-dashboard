const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            "@components": path.resolve(__dirname, 'src/components'),
            "@images": path.resolve(__dirname, 'src/images'),
            "@data": path.resolve(__dirname, 'src/data'),
            "@utils": path.resolve(__dirname, 'src/utils'),
            "@store": path.resolve(__dirname, 'src/store'),
            "@pages": path.resolve(__dirname, 'src/pages')
        },
    };

    return config;
};