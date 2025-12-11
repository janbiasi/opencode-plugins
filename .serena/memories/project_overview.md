# OpenCode Plugins Project Overview

## Purpose
This is a monorepo containing personal OpenCode plugins. OpenCode is an interactive CLI tool that helps users with software engineering tasks, and these plugins extend its functionality.

## Current Plugins
1. **caffeinate** - Prevents system from sleeping during agentic workflows (macOS only)
2. **env-protection** - Prevents OpenCode from reading .env files for security

## Tech Stack
- **Language**: TypeScript
- **Runtime**: Bun (instead of Node.js)
- **Package Manager**: Bun
- **Monorepo Tool**: Lerna
- **Build Tool**: Bun build
- **Plugin API**: @opencode-ai/plugin

## Project Structure
```
opencode-plugins/
├── plugins/
│   ├── caffeinate/
│   │   ├── plugin.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   └── env-protection/
│       ├── plugin.ts
│       ├── package.json
│       ├── README.md
│       └── tsconfig.json
├── package.json (root workspace)
├── lerna.json
└── index.ts
```

## Publishing
- Uses Lerna for version management and publishing
- Independent versioning for each plugin
- Conventional commits required
- Publishes to npm registry