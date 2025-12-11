import type { Plugin } from "@opencode-ai/plugin";


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
    client.tui.showToast({
      body: {
        title: "Caffeinate not supported",
        message: "Caffeinate currently only works on macOS",
        variant: "warning"
      }
    })
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
        case "lsp.updated":
          await Promise.all(caffeinateCmds.map(cmd => $`${cmd}`))
          break;
        case "session.idle":
          await Promise.all(uncaffeinateCmds.map(cmd => $`${cmd}`))
          break;
        default:
          break;
      }
    },
  }
}
