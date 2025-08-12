// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "benefits/": "/",
  },
  vite: {
    // @ts-ignore
    plugins: [tailwind(), tsconfigPaths()],
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
});
