import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_p0E8SPcA.mjs';
import { manifest } from './manifest_ymBzHwWX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/api/products.astro.mjs');
const _page3 = () => import('./pages/productos/_product_.astro.mjs');
const _page4 = () => import('./pages/_category_.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin.astro", _page1],
    ["src/pages/api/products.js", _page2],
    ["src/pages/productos/[product].astro", _page3],
    ["src/pages/[category].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "87f8b06c-f275-4493-809b-ce3af77f1599",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
