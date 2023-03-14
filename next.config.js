const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    assetPrefix: '/',
    trailingSlash: true,
    productionBrowserSourceMaps: true,
    images: {
        loader: 'custom',
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    transpilePackages: ['next-image-export-optimizer'],
    env: {
        nextImageExportOptimizer_imageFolderPath: 'public/imgs',
        nextImageExportOptimizer_exportFolderPath: 'docs',
        nextImageExportOptimizer_quality: 75,
        nextImageExportOptimizer_storePicturesInWEBP: true,
        nextImageExportOptimizer_exportFolderName: 'optimized',
        nextImageExportOptimizer_generateAndUseBlurImages: true,
    },
};
