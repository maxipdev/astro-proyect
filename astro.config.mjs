// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
// import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  // adapter: vercel(),
  adapter: node({ mode: "standalone" }),
});
