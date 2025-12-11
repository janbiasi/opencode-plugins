# Suggested Commands for OpenCode Plugins

## Development Commands
- `bun install` - Install dependencies for all packages
- `bun run build` - Build all plugins
- `bun run --filter "@opencode-plugins/*" build` - Build specific plugins

## Testing Commands
- `bun test` - Run tests (uses Bun's built-in test runner)

## Publishing Commands
- `bun run release` - Publish all plugins using Lerna
- `lerna publish --no-commit-hooks --conventional-commits --create-release github --yes` - Full release command

## Git Commands
- `git status` - Check current state
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git push` - Push to remote

## Utility Commands
- `ls` - List files
- `cd <dir>` - Change directory
- `grep <pattern> <file>` - Search in files
- `find . -name "*.ts"` - Find TypeScript files

## Plugin Development
- Each plugin has its own `plugin.ts` file
- Build output goes to `dist/` directory
- Use `@opencode-ai/plugin` types