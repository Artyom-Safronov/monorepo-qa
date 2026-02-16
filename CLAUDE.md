# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **microfrontend monorepo** demonstrating different ESLint configurations across multiple React applications. The architecture uses:
- **Vite + Module Federation** for microfrontend implementation
- **pnpm workspaces** for monorepo management
- **NestJS + TypeORM + SQLite** for the backend API

The project showcases different ESLint configuration approaches (legacy, transitional, modern) to help teams understand migration paths.

## Architecture

### Microfrontend Structure

**Host Application** (`client/host/`)
- Runs on port **4173**
- Consumes all remote microfrontends via Module Federation
- Configured in `vite.config.ts` with remote entry points
- Serves as the shell application with routing and navigation

**Remote Applications** (`client/projects/eslint/`)
- **legacy** (port 4174): Uses `.eslintrc.json` with older ESLint versions
- **transitional** (port 4175): Intermediate configuration for migration scenarios
- **modern** (port 4176): Uses flat config (`eslint.config.js`) with ESLint 9+
- **issued/alex-karelin** (port 4177): Legacy project with React 17 + Redux 3.7 + airbnb config

Each remote exposes its App component through Module Federation and runs independently.

**Shared Code**
- `client/common/src/`: Shared UI components (Button, ListRow, etc.)
- `client/shared/`: Shared utilities and types
- Both are referenced in remote vite configs via `fs.allow` for cross-project imports

### Backend Structure

**Server** (`server/`)
- NestJS application running on port **3000** (or `process.env.PORT`)
- **Database**: SQLite with TypeORM (`db.sqlite` at server root)
- **API Modules**:
  - `projects/`: Manages ESLint projects
  - `eslint-features/`: Manages ESLint feature configurations
- **Swagger documentation** available at `/api` endpoint
- API proxy configured in remote apps at `/api/v1/projects` → `http://127.0.0.1:8080`

## Development Commands

### Running the Entire Stack

From the repository root:
```bash
# Install all dependencies
pnpm install
pnpm -r install

# Start all applications in development mode (host + all remotes)
pnpm -r dev

# Build all applications
pnpm -r build

# Preview all built applications
pnpm -r preview
```

### Running Individual Applications

For the **host**:
```bash
cd client/host
pnpm dev          # Port 4173
pnpm build
pnpm preview
```

For a **remote** (e.g., modern):
```bash
cd client/projects/eslint/modern
pnpm dev          # Port 4176
pnpm build
pnpm preview
pnpm lint         # Run ESLint
pnpm lint:fix     # Auto-fix ESLint issues
```

For the **server**:
```bash
cd server
npm run start:dev      # Development with watch mode
npm run start:debug    # Debug mode
npm run build          # Build for production
npm run start:prod     # Run production build
npm test               # Run unit tests
npm run test:e2e       # Run e2e tests
npm run test:cov       # Run tests with coverage
npm run lint           # Lint TypeScript files
```

### SQLite Database

If you need to rebuild the SQLite native module:
```bash
cd server
npm run build:sql
```

## Module Federation Details

### Shared Dependencies

All microfrontends share these libraries as singletons:
- `react` / `react-dom` (specific versions from package.json)
- `react-router`
- `@emotion/react`
- `@mui/material`
- `@tanstack/react-query`

This ensures only one instance of each library is loaded across all microfrontends.

### Remote Entry Points

The host app is configured to load remotes from:
- `http://localhost:4174/remoteEntry.js` (eslint-legacy)
- `http://localhost:4175/remoteEntry.js` (eslint-transitional)
- `http://localhost:4176/remoteEntry.js` (eslint-modern)
- `http://localhost:4177/remoteEntry.js` (eslint-alex-karelin)

**Important**: All remote apps must be running for the host to load them properly. If a remote is down, the host will show loading errors.

### Environment Variables

Remote apps use Vite's `loadEnv()` and generate an `environment.ts` file during build. Environment variables are loaded from `.env` files in each project directory.

## ESLint Configuration Patterns

This repo demonstrates three ESLint approaches:

1. **Legacy** (`.eslintrc.json`): Traditional configuration format, older ESLint versions
2. **Transitional** (`.eslintrc.json`): Hybrid approach for gradual migration
3. **Modern** (`eslint.config.js`): Flat config format introduced in ESLint 9

When working on ESLint configs:
- Modern projects use `defineConfig` from `eslint/config`
- Legacy projects may have different plugin syntax and rule sets
- Check the specific project's `package.json` for ESLint version and plugins

## Common Development Workflows

### Adding a New Remote Application

1. Create new directory in `client/projects/eslint/<name>/`
2. Add `package.json` with unique port number (next available: 4178+)
3. Create `vite.config.ts` with Module Federation setup:
   - Set `name` to unique remote name
   - Configure `exposes` to export the App component
   - Include shared dependencies configuration
4. Update `client/host/vite.config.ts` to add the new remote
5. Add to workspace in root `pnpm-workspace.yaml` if needed
6. Create route in host application

### Working with Shared Components

Shared components in `client/common/src/` can be imported by any remote:
```typescript
import { ListRow } from '../../common/src/ListRow';
import { CustomButton } from '../../common/src/Button';
```

The vite config must allow filesystem access: `fs: { allow: ['.', '../../shared', '../../common'] }`

### Debugging Module Federation Issues

1. Ensure all remote apps are running before starting the host
2. Check browser console for federation errors (missing remotes, version mismatches)
3. Verify shared dependency versions match across all apps
4. Check that exposed components exist at the specified paths
5. Inspect network tab for `remoteEntry.js` requests and responses

### Working with the Database

The server uses TypeORM with `synchronize: true`, so schema changes are automatically applied during development. For production, you should use migrations.

Database entities are located in:
- `server/src/projects/entities/`
- `server/src/eslint-features/entities/`

## Port Reference

| Application          | Port | Purpose                          |
|----------------------|------|----------------------------------|
| Host                 | 4173 | Main microfrontend shell         |
| eslint-legacy        | 4174 | Legacy ESLint demo               |
| eslint-transitional  | 4175 | Transitional ESLint demo         |
| eslint-modern        | 4176 | Modern ESLint demo               |
| eslint-alex-karelin  | 4177 | Legacy project demo              |
| Server               | 3000 | NestJS API (configurable)        |
| Server proxy target  | 8080 | Backend API target for remotes   |

## Technology Stack

**Frontend:**
- React 18.3+
- TypeScript 5.4+
- Vite 5.2+
- Module Federation (@module-federation/vite 1.1.9)
- Material-UI 7.3+
- React Router 7+
- TanStack Query 5+

**Backend:**
- NestJS 11+
- TypeORM 0.3+
- better-sqlite3 11+
- Swagger/OpenAPI

**Tooling:**
- pnpm for workspace management
- ESLint for code quality
- Prettier for code formatting
- Jest for testing
