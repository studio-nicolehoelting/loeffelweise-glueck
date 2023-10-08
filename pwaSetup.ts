import type { VitePWAOptions } from "vite-plugin-pwa";

export default {
    mode: "development",
    base: "/",
    scope: "/",
    includeAssets: ["favicon.svg"],
    manifest: {
        name: "Löffelweise Glück",
        short_name: "Löffelweise Glück",
        theme_color: "#b89172",
        background_color: "#222222",
        description: "Die App zur Website",
        display: "standalone",
        icons: [
            {
                src: "icons/icon-72x72.png",
                sizes: "72x72",
                type: "image/png",
            },
            {
                src: "icons/icon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                src: "icons/icon-128x128.png",
                sizes: "128x128",
                type: "image/png",
            },
            {
                src: "icons/icon-144x144.png",
                sizes: "144x144",
                type: "image/png",
            },
            {
                src: "icons/icon-152x152.png",
                sizes: "152x152",
                type: "image/png",
            },
            {
                src: "icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "icons/icon-384x384.png",
                sizes: "384x384",
                type: "image/png",
            },
            {
                src: "icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "icons/maskable_icon_x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable",
            },
        ],
        categories: ["food", "health", "lifestyle", "photo"],
    },
    workbox: {
        navigateFallback: "/pwa_404/",
        globPatterns: [
            "**/*.{css,js,html,svg,png,ico,txt,webp,TTF,woff2,avif}",
        ],
    },
    devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/pwa_404$/],
    },
} as Partial<VitePWAOptions>;
