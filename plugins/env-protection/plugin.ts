import type { Plugin } from "@opencode-ai/plugin";

const filesToProtect = ['.env', '.credential', '.secret']

export const EnvProtection: Plugin = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool === "read" && filesToProtect.some(file => output.args.filePath.includes(file))) {
        throw new Error("Do not read .env files");
      }
    },
  };
};
