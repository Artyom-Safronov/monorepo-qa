/**
 * ESLint config для src/utils — наследует корневой конфиг и переопределяет правила.
 *
 * Используется при запуске линтера непосредственно из этой директории:
 *   eslint --config src/utils/eslint.config.js src/utils/
 *
 * Корневой eslint.config.js остаётся самодостаточным и не импортирует этот файл.
 */
import rootConfig from "../../eslint.config.js";

export default [
  // Наследуем все правила из корневого конфига
  ...rootConfig,


  // Переопределения для файлов внутри utils/
  {
    rules: {
      // Переопределение: в utils разрешено использовать console (снимает запрет корневого конфига)
      "no-console": "off",

      // Добавление: все переменные должны быть в PascalCase
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["PascalCase"],
        },
      ],
    },
  },
];
