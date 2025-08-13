import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_Dv6BqB0r.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BST6i2JP.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Maximo%20Penacino/Desktop/astro/astro-proyect/","cacheDir":"file:///C:/Users/Maximo%20Penacino/Desktop/astro/astro-proyect/node_modules/.astro/","outDir":"file:///C:/Users/Maximo%20Penacino/Desktop/astro/astro-proyect/dist/","srcDir":"file:///C:/Users/Maximo%20Penacino/Desktop/astro/astro-proyect/src/","publicDir":"file:///C:/Users/Maximo%20Penacino/Desktop/astro/astro-proyect/public/","buildClientDir":"file:///C:/Users/Maximo%20Penacino/Desktop/astro/astro-proyect/dist/client/","buildServerDir":"file:///C:/Users/Maximo%20Penacino/Desktop/astro/astro-proyect/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_category_.CJVY_FFq.css"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/products","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/products\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/products.js","pathname":"/api/products","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_category_.CJVY_FFq.css"},{"type":"inline","content":".container-page[data-astro-cid-hfj53zrw]{background-color:#fff;border-radius:100px}\n"}],"routeData":{"route":"/productos/[product]","isIndex":false,"type":"page","pattern":"^\\/productos\\/([^/]+?)\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}],[{"content":"product","dynamic":true,"spread":false}]],"params":["product"],"component":"src/pages/productos/[product].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/pages/[category].astro",{"propagation":"none","containsHead":true}],["C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/pages/productos/[product].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/products@_@js":"pages/api/products.astro.mjs","\u0000@astro-page:src/pages/productos/[product]@_@astro":"pages/productos/_product_.astro.mjs","\u0000@astro-page:src/pages/[category]@_@astro":"pages/_category_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DTyuKez-.mjs","\u0000@astrojs-manifest":"manifest_ymBzHwWX.mjs","C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/components/BigImage.jsx":"_astro/BigImage.Bcu_lhj0.js","C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/components/buttonBigImage.jsx":"_astro/buttonBigImage.CkO3d8FE.js","@astrojs/react/client.js":"_astro/client.Co8vYzjG.js","C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.D98dxaWf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_category_.CJVY_FFq.css","/_astro/_category_.SAcrDAGG.css","/favicon.svg","/_astro/BigImage.Bcu_lhj0.js","/_astro/buttonBigImage.CkO3d8FE.js","/_astro/client.Co8vYzjG.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.D98dxaWf.js","/_astro/index.BKz8HbS8.js","/_astro/store.D7d06mNm.js","/_astro/_category_.BosfqgBY.css","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"tPx5rNAhUwc5Sww1vSWQPXynjgfUIsOdi36NQCV97IA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
