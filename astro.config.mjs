// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      PORT: envField.number({
        context: "server",
        access: "public",
        default: 4321,
      }),
    },
  },
});
