# Style and Conventions

## Code Style
- TypeScript with strict typing
- ES modules (`"type": "module"`)
- Use `@opencode-ai/plugin` types
- Plugin exports follow naming convention: `PluginNamePlugin`

## File Structure
- Each plugin in its own directory under `plugins/`
- Required files: `plugin.ts`, `package.json`, `README.md`, `tsconfig.json`
- Build output in `dist/` directory

## Package.json Conventions
- Name format: `@opencode-plugins/plugin-name`
- Version: Independent (managed by Lerna)
- Build script: `bun build plugin.ts --outdir ./dist`
- Files array: `["dist"]`

## Git Conventions
- Conventional commits required
- Main branch only for releases
- Format: `type(scope): description`

## Plugin Development
- Export async function returning Plugin object
- Handle platform-specific code (e.g., macOS only)
- Use proper error handling and user feedback