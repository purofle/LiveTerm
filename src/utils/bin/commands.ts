// List of commands that do not require API calls

import * as bin from './index'
import config from '../../../config.json'
import { list as listHistory } from '../history'
import { showPacman } from './pacman'

type CommandAction = (args?: string[]) => Promise<string>

interface Command {
  name?: string | any
  command: CommandAction
}

function urla(herf: String, text: String): String {
  return `<u><a class='text-light-blue dark:text-dark-blue underline' href='${herf}' target='_blank'>${text}</a></u>`
}

// Help
export const help = async (): Promise<string> => {
  let c = ''
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n'
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' '
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'neofetch' to display summary.
`
}

// Redirection
export const repo = async (): Promise<string> => {
  window.open(`${config.repo}`)
  return 'Opening Github repository...'
}

// About
export const about = async (): Promise<string> => {
  return `Hi, I am ${config.name}.
Welcome to my website!
More about me:
'neofetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`
}

// Donate
/*
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest.
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};
*/

// Contact
export const email = async (): Promise<string> => {
  window.open(`mailto:${config.email}`)
  return `Opening mailto:${config.email}...`
}

export const github = async (): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`)

  return 'Opening github...'
}

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`)
  return `Searching google for ${args.join(' ')}...`
}

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`)
  return `Searching duckduckgo for ${args.join(' ')}...`
}

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ')
}

export const whoami = async (): Promise<string> => {
  return `${config.ps1_username}`
}

export const ls = async (): Promise<string> => {
  return `bin
usr
etc
lib
tmp`
}

export const cd = async (): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`
}

export const date = async (): Promise<string> => {
  return new Date().toString()
}

export const vi = async (): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`
}

export const vim = async (): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`
}

export const nvim = async (): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`
}

export const emacs = async (): Promise<string> => {
  return `you know what? just use vscode.`
}

export const vscode = async (): Promise<string> => {
  return `use sudo retry?`
}

export const code = async (): Promise<string> => {
  return `use sudo retry?`
}

export const sudo = async (): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank') // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `
}

export const url = async (): Promise<String> => {
  return `Alist: ${urla(
    'https://alist.archlinux.tech',
    'alist.archlinux.tech',
  )}\nMy blog: ${urla('https://blog.archlinux.tech', 'blog.archlinux.tech')}`
}

export const history = async (): Promise<string> => {
  return listHistory()
}

export const pacman = async (args: string[]): Promise<string> => {
  return showPacman(args)
}

// Banner
export const banner = (): string => {
  return `
    _             _       _     _                  
   / \\   _ __ ___| |__   | |   (_)_ __  _   ___  __
  / _ \\ | '__/ __| '_ \\  | |   | | '_ \\| | | \\ \\/ /
 / ___ \\| | | (__| | | | | |___| | | | | |_| |>  < 
/_/   \\_\\_|  \\___|_| |_| |_____|_|_| |_|\\__,_/_/\\_\\
                                                   


Type 'help' to see the list of available commands.
Type 'neofetch' to display summary.
Type 'repo' or click <u><a class='text-light-blue dark:text-dark-blue underline' href='${config.repo}' target='_blank'>here</a></u> for the Github repository.
Type 'url' to see how do I use this domain.
`
}

export const commandList: Command[] = [
  help,
  repo,
  about,
  email,
  github,
  google,
  duckduckgo,
  echo,
  whoami,
  ls,
  cd,
  date,
  vi,
  vim,
  nvim,
  emacs,
  vscode,
  code,
  sudo,
  url,
  history,
  pacman,
  banner,
].map((v) => {
  return <Command>{
    command: v,
  }
})
