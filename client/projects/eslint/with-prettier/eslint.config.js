import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfigEslint from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import { fileURLToPath } from "url";
import path from "path";
import prettierConfig from "./prettierrc.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
  pluginReact.configs.flat.recommended,
  // eslint-config-prettier отключает правила ESLint, конфликтующие с Prettier
  prettierConfigEslint,
  {
    // eslint-plugin-prettier запускает Prettier как правило ESLint
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "react/display-name": "off",
      "no-console": "warn",
      "prettier/prettier": ["error", prettierConfig],
    },
  },
]);
