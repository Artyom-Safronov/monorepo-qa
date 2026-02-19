// Этот файл попадает под конфиг src/utils/eslint.config.js, который:
//   1. Требует PascalCase для всех переменных
//   2. Разрешает console (no-console: "off"), переопределяя корневой запрет

// ✅ Не нарушение: no-console отключён в utils-конфиге
console.log("utils loaded");

// ----------------------------------------------------------------
// Нарушение: naming-convention — переменная должна быть в PascalCase
const httpClient = "fetch";

// Нарушение: naming-convention — должен быть PascalCase
// Нарушение: @typescript-eslint/no-inferrable-types — тип string избыточен
let baseUrl: string = "https://api.example.com";

// Нарушение: naming-convention — должен быть PascalCase
// Нарушение: no-var (из js.configs.recommended / корневого конфига)
var maxRetries = 3;

// ✅ Не нарушение: PascalCase соблюдён
const HttpClient = "fetch";
const BaseUrl = "https://api.example.com";

// Нарушение: naming-convention — должен быть PascalCase (snake_case не подходит)
const api_timeout = 5000;

// Нарушение: @typescript-eslint/explicit-function-return-type — нет возвращаемого типа
// ✅ Не нарушение: console разрешён (no-console: "off" из utils-конфига)
export function getConfig() {
  console.log("config loaded");
  return {
    url: baseUrl,
    retries: maxRetries,
    timeout: api_timeout,
  };
}

// Нарушение: naming-convention — должен быть PascalCase
// Нарушение: @typescript-eslint/explicit-function-return-type — нет возвращаемого типа
export const formatUrl = (path: string) => `${HttpClient}://${BaseUrl}/${path}`;
