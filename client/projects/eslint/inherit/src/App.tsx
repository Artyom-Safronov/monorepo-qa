import { FC } from "react";
import { getConfig, formatUrl } from "./utils/variables";

// Этот файл попадает только под базовый (корневой) конфиг — без utils-переопределений

const App: FC = () => {
  const config = getConfig();

  // Нарушение: no-console — console запрещён в корневом конфиге (не переопределён)
  console.log("app rendered", config);

  // Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
  const unusedVar = formatUrl("test");

  // Нарушение: @typescript-eslint/no-inferrable-types — тип number избыточен
  const timeout: number = 3000;

  // Нарушение: prefer-const — переменная не переназначается, должна быть const
  let label = "Inherit ESLint Config";

  // Нарушение: no-var
  var deprecated = true;

  // Нарушение: eqeqeq (через js.configs.recommended) — == вместо ===
  if (timeout == 3000) {
    label = label.trim();
  }

  return (
    <div className="app">
      <h1>{label}</h1>
      <p>deprecated: {String(deprecated)}</p>
    </div>
  );
};

export default App;
