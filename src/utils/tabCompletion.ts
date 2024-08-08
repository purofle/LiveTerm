import React from 'react'
import { commandList } from './bin'

export const handleTabCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  // const commands = Object.keys(bin).filter((entry) => entry.startsWith(command))
  const commands = commandList
    .map((e) => {
      return e.command.name
    })
    .filter((e) => {
      return e.startsWith(command)
    })

  if (commands.length === 1) {
    setCommand(commands[0])
  }
}
