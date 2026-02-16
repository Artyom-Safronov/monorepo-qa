# React Microfrontend Client

Клиентская часть монорепозитория с микрофронтенд архитектурой на базе Vite + Module Federation.

## Предварительные требования

Перед началом работы убедитесь, что у вас установлены:

- **Node.js** версии 18+ (рекомендуется 18.x или 20.x)
- **pnpm** версии 8+ (менеджер пакетов)

### Установка pnpm

Если pnpm не установлен, выполните:

```bash
# Через npm
npm install -g pnpm

# Или через Homebrew (macOS)
brew install pnpm

# Или через corepack (встроен в Node.js 16.13+)
corepack enable
corepack prepare pnpm@latest --activate
```

Проверьте установку:
```bash
node --version   # Должна быть 18+
pnpm --version   # Должна быть 8+
```

## Установка зависимостей

Из корня репозитория или из директории `client/`:

```bash
# Установка зависимостей для всех пакетов
pnpm install

# Или рекурсивная установка для всех воркспейсов
pnpm -r install
```

Эта команда установит зависимости для:
- Host приложения (`client/host/`)
- Всех remote приложений (`client/projects/eslint/*/`)

## Запуск приложений

### Вариант 1: Запуск всех приложений одновременно

Из корня репозитория:

```bash
# Запуск в режиме разработки (host + все remotes)
pnpm -r dev
```

Это запустит:
- **Host**: http://localhost:4173
- **ESLint Legacy**: http://localhost:4174
- **ESLint Transitional**: http://localhost:4175
- **ESLint Modern**: http://localhost:4176
- **ESLint Alex Karelin**: http://localhost:4177

⚠️ **Важно**: Для корректной работы host приложения все remote приложения должны быть запущены.

### Вариант 2: Запуск отдельных приложений

#### Host приложение

```bash
cd client/host
pnpm dev
```

Откройте http://localhost:4173

#### Remote приложения

Legacy конфигурация:
```bash
cd client/projects/eslint/legacy
pnpm dev
```

Transitional конфигурация:
```bash
cd client/projects/eslint/transitional
pnpm dev
```

Modern конфигурация:
```bash
cd client/projects/eslint/modern
pnpm dev
```

Alex Karelin проект:
```bash
cd client/projects/eslint/issued/alex-karelin
pnpm dev
```

## Сборка для продакшена

### Сборка всех приложений

Из корня репозитория:

```bash
pnpm -r build
```

### Сборка отдельного приложения

```bash
cd client/host  # или любое другое приложение
pnpm build
```

Собранные файлы будут в директории `dist/` каждого проекта.

## Просмотр production сборки

После сборки можно запустить preview:

```bash
# Все приложения
pnpm -r preview

# Или отдельное приложение
cd client/host
pnpm preview
```

## Линтинг

Для remote приложений с настроенным ESLint:

```bash
cd client/projects/eslint/modern  # или другой проект
pnpm lint           # Проверка
pnpm lint:fix       # Автоматическое исправление
```

## Структура проекта

```
client/
├── host/                          # Host приложение (микрофронтенд shell)
│   ├── src/
│   ├── vite.config.ts            # Конфигурация Module Federation
│   └── package.json
├── projects/
│   └── eslint/                   # ESLint демо проекты
│       ├── legacy/               # Устаревшая конфигурация (.eslintrc.json)
│       ├── transitional/         # Промежуточная конфигурация
│       ├── modern/               # Современная конфигурация (flat config)
│       └── issued/
│           └── alex-karelin/     # Legacy проект (React 17 + Redux 3.7)
├── common/                       # Общие UI компоненты
│   └── src/
│       ├── Button.tsx
│       └── ListRow.tsx
├── shared/                       # Общие утилиты и типы
└── package.json                  # Root package.json для workspace
```

## Архитектура Module Federation

Приложение использует Vite Module Federation для микрофронтенд архитектуры:

- **Host** загружает remote приложения динамически
- **Shared dependencies**: React, React DOM, MUI, React Router, TanStack Query
- Каждый remote работает как независимое приложение
- Host и remotes обмениваются компонентами через `remoteEntry.js`

### Как это работает:

1. Host загружается на порту 4173
2. Host запрашивает `remoteEntry.js` от каждого remote приложения
3. Remote приложения экспортируют свои компоненты через Module Federation
4. Общие библиотеки загружаются один раз и шарятся между всеми приложениями

## Решение проблем

### Remote приложение не загружается

1. Убедитесь, что все remote приложения запущены
2. Проверьте, что порты не заняты другими процессами
3. Проверьте консоль браузера на ошибки Module Federation
4. Убедитесь, что версии shared зависимостей совпадают

### Ошибки при установке зависимостей

```bash
# Очистите кэш и node_modules
rm -rf node_modules client/host/node_modules client/projects/eslint/*/node_modules
pnpm store prune

# Переустановите зависимости
pnpm install
```

### Конфликты портов

Если порты заняты, измените их в `package.json` каждого приложения:
```json
"scripts": {
  "dev": "vite --port НОВЫЙ_ПОРТ"
}
```

И обновите соответствующие записи в `client/host/vite.config.ts`.

