import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// @ts-ignore
import { dependencies } from "./package.json";

export default defineConfig({
  server: {
    fs: {
      allow: [".", "../../shared", "../../common"],
    },
  },
  build: {
    target: "chrome89",
  },
  plugins: [
    federation({
      filename: "remoteEntry.js",
      name: "eslint-inherit",
      exposes: {
        "./inherit-app": "./src/App.tsx",
      },
      remotes: {},
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
        "react-router": {
          requiredVersion: dependencies["react-router"],
          singleton: true,
        },
      },
    }),
    react(),
  ],
});
