import { defineConfig } from "vite";
import path from "path";

const libName = "storyblok-js";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.ts"),
        name: "storyblok",
        fileName: (format) =>
          format === "es" ? `${libName}.mjs` : `${libName}.js`,
      },
      rollupOptions: {
        output: {
          globals: {
            "storyblok-js-client": "StoryblokJSClient",
          },
        },
        external: ["storyblok-js-client"],
      },
    },
    test: {
      setupFiles: ["./tests/setup.js"],
    },
    define: {
      "process.env": {
        npm_package_version: process.env.npm_package_version,
      },
    },
  };
});
