import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dv6BqB0r.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CnWT_6hn.mjs';
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Esta es la admin page</h1> ` })}`;
}, "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/pages/admin.astro", void 0);

const $$file = "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Admin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
