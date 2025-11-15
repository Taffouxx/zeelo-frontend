// минимальный no-op плагин, чтобы require() не падал
module.exports = function vitePrerenderPlugin() {
    return { name: "vite-prerender-plugin-noop" };
};
