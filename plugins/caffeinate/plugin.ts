import { promisify } from "node:util"
import { exec } from "node:child_process"
import type { Plugin } from "@opencode-ai/plugin";

const execAsync = promisify(exec);

const commands = {
  caffeinate: {
    darwin: [`pkill -x caffeinate 2>/dev/null`, `caffeinate -d -i -s -t 300 & exit 0`]
  },
  uncaffeinate: {
    darwin: [`pkill -x caffeinate 2>/dev/null`]
  }
}

export const CaffeinatePlugin: Plugin = async ({ project, client, $, directory, worktree }) => {
  const kernelInfo = (await $`uname -a`).text.toString().toLowerCase();
  if (!kernelInfo.startsWith("darwin")) {
    await client.tui.showToast({
      body: {
        title: "Caffeinate not supported",
        message: "Caffeinate currently only works on macOS",
        variant: "warning"
      }
    })
    return {};
  }

  const caffeinateCmds = commands.caffeinate.darwin;
  const uncaffeinateCmds = commands.uncaffeinate.darwin;

  return {
    event: async ({ event }) => {
      switch(event.type) {
        case "file.edited":
        case "message.updated":
        case "command.executed":
        case "permission.replied":
        case "permission.updated":
        case "todo.updated":
        case "session.updated":
        case "message.part.updated":
          await Promise.all(caffeinateCmds.map(cmd => execAsync(`${cmd}`)));
          break;
        case "session.idle":
          await Promise.all(uncaffeinateCmds.map(cmd => execAsync(`${cmd}`)));
          break;
        default:
          break;
      }
    },
  }
}
