export function showPacman(args: string[]) {
  if (args.length == 0) {
    return 'error: no operation specified (use -h for help)'
  }
  if (args.find((e) => e == '-h')) {
    return `usage:  pacman <operation> [...]
operations:
    pacman {-h --help}
    pacman {-V --version}
    pacman {-D --database} <options> <package(s)>
    pacman {-F --files}    [options] [file(s)]
    pacman {-Q --query}    [options] [package(s)]
    pacman {-R --remove}   [options] <package(s)>
    pacman {-S --sync}     [options] [package(s)]
    pacman {-T --deptest}  [options] [package(s)]
    pacman {-U --upgrade}  [options] <file(s)>

use 'pacman {-h --help}' with an operation for available options`
  }

  if (args[0].startsWith('-S')) {
    if (args.length == 2) {
      return `error: target not found: ${args[1]}`
    }
    if (args.length == 1) {
      return 'error: no targets specified (use -h for help)'
    }
  }

  return ''
}
