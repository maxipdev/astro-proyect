import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dv6BqB0r.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CnWT_6hn.mjs';
import { createClient } from '@supabase/supabase-js';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$product = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$product;
  const { id } = Astro2.params;
  const supabaseUrl = "https://bswmbazkzzilbxoodxmr.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzd21iYXprenppbGJ4b29keG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNDQwMjcsImV4cCI6MjA2MTkyMDAyN30.lMyjkrqq5x3Dp3PIohMChddA0pUNZMPBrlI3xDjbP-c";
  const supabase = createClient(supabaseUrl, supabaseKey);
  let { data: products, error } = await supabase.from("products").select("*").eq("id", id);
  console.log(products);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-hfj53zrw": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-page" data-astro-cid-hfj53zrw> <!-- <div class="container-product"></div> --> <div data-astro-cid-hfj53zrw>${products}</div> <h1 data-astro-cid-hfj53zrw>Computadora Gaming</h1> </div> ` })} `;
}, "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/pages/productos/[product].astro", void 0);

const $$file = "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/pages/productos/[product].astro";
const $$url = "/productos/[product]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$product,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
