import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, e as addAttribute, f as renderScript, r as renderComponent, g as renderHead, h as renderSlot } from './astro/server_Dv6BqB0r.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-k2f5zb5c> <h1 data-astro-cid-k2f5zb5c>Contacto:</h1> <div class="contacto" data-astro-cid-k2f5zb5c>whatsapp: 1154873779</div> <div class="publicidad" data-astro-cid-k2f5zb5c> <span data-astro-cid-k2f5zb5c>@Todos los derechos reservados</span> <span data-astro-cid-k2f5zb5c>Web site created by Maximo Penacino</span> </div> </footer> `;
}, "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/components/footer.astro", void 0);

const $$SearchBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="buscador-container" data-astro-cid-fbwv5mks> <form data-astro-cid-fbwv5mks> <input type="text" name="search" placeholder="¿Qué estas buscando?" data-astro-cid-fbwv5mks> <button class="boton" data-astro-cid-fbwv5mks>Buscar</button> </form> </section> `;
}, "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/components/searchBar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-hpnw4vwy> <nav data-astro-cid-hpnw4vwy> <a href="/" class="logo" data-astro-cid-hpnw4vwy>Jimbofertas</a> <!-- <button class='open-menu' aria-label='abrir menú' >
        <img src={openIcon} alt="abrir menú" />
    </button> --> <ul class="menu" data-astro-cid-hpnw4vwy> <!-- <button class='close-menu' aria-label='cerrar menú' >
        <img src={closeIcon} alt="cerrar menú" />
        </button> --> <li data-astro-cid-hpnw4vwy><a href="/home" class="selected" data-astro-cid-hpnw4vwy>Inicio</a></li> <li data-astro-cid-hpnw4vwy><a href="/higene&hogar" data-astro-cid-hpnw4vwy>Higene & Hogar</a></li> <li data-astro-cid-hpnw4vwy><a href="/indumentaria" data-astro-cid-hpnw4vwy>Indumentaria</a></li> <li data-astro-cid-hpnw4vwy><a href="/electrodomesticos" data-astro-cid-hpnw4vwy>Electrodomesticos</a></li> <li data-astro-cid-hpnw4vwy><a href="/tecnologia" data-astro-cid-hpnw4vwy>Tecnologia</a></li> <li data-astro-cid-hpnw4vwy><a href="/otros" data-astro-cid-hpnw4vwy>Otros</a></li> </ul> </nav> </header> `;
}, "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/components/header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "SearchBar", $$SearchBar, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Maximo Penacino/Desktop/astro/astro-proyect/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
