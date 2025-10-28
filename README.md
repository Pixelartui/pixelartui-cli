pixelartui-cli
=================

Cli for pixelartui development


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pixelartui-cli.svg)](https://npmjs.org/package/pixelartui-cli)
[![Downloads/week](https://img.shields.io/npm/dw/pixelartui-cli.svg)](https://npmjs.org/package/pixelartui-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pixelartui-cli
$ pixelartui-cli COMMAND
running command...
$ pixelartui-cli (--version)
pixelartui-cli/0.1.0 darwin-arm64 node-v24.3.0
$ pixelartui-cli --help [COMMAND]
USAGE
  $ pixelartui-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pixelartui-cli gen component [NAME]`](#pixelartui-cli-gen-component-name)
* [`pixelartui-cli hello PERSON`](#pixelartui-cli-hello-person)
* [`pixelartui-cli hello world`](#pixelartui-cli-hello-world)
* [`pixelartui-cli help [COMMAND]`](#pixelartui-cli-help-command)
* [`pixelartui-cli plugins`](#pixelartui-cli-plugins)
* [`pixelartui-cli plugins add PLUGIN`](#pixelartui-cli-plugins-add-plugin)
* [`pixelartui-cli plugins:inspect PLUGIN...`](#pixelartui-cli-pluginsinspect-plugin)
* [`pixelartui-cli plugins install PLUGIN`](#pixelartui-cli-plugins-install-plugin)
* [`pixelartui-cli plugins link PATH`](#pixelartui-cli-plugins-link-path)
* [`pixelartui-cli plugins remove [PLUGIN]`](#pixelartui-cli-plugins-remove-plugin)
* [`pixelartui-cli plugins reset`](#pixelartui-cli-plugins-reset)
* [`pixelartui-cli plugins uninstall [PLUGIN]`](#pixelartui-cli-plugins-uninstall-plugin)
* [`pixelartui-cli plugins unlink [PLUGIN]`](#pixelartui-cli-plugins-unlink-plugin)
* [`pixelartui-cli plugins update`](#pixelartui-cli-plugins-update)

## `pixelartui-cli gen component [NAME]`

Cli to generate files for new component

```
USAGE
  $ pixelartui-cli gen component [NAME]

ARGUMENTS
  [NAME]  component name

DESCRIPTION
  Cli to generate files for new component

EXAMPLES
  NewComponent.tsx
```

_See code: [src/commands/gen/component.ts](https://github.com/Pixelartui/pixelartui-cli/blob/v0.1.0/src/commands/gen/component.ts)_

## `pixelartui-cli hello PERSON`

Say hello

```
USAGE
  $ pixelartui-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ pixelartui-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/Pixelartui/pixelartui-cli/blob/v0.1.0/src/commands/hello/index.ts)_

## `pixelartui-cli hello world`

Say hello world

```
USAGE
  $ pixelartui-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ pixelartui-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/Pixelartui/pixelartui-cli/blob/v0.1.0/src/commands/hello/world.ts)_

## `pixelartui-cli help [COMMAND]`

Display help for pixelartui-cli.

```
USAGE
  $ pixelartui-cli help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for pixelartui-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.34/src/commands/help.ts)_

## `pixelartui-cli plugins`

List installed plugins.

```
USAGE
  $ pixelartui-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ pixelartui-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/index.ts)_

## `pixelartui-cli plugins add PLUGIN`

Installs a plugin into pixelartui-cli.

```
USAGE
  $ pixelartui-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into pixelartui-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PIXELARTUI_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PIXELARTUI_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ pixelartui-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ pixelartui-cli plugins add myplugin

  Install a plugin from a github url.

    $ pixelartui-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ pixelartui-cli plugins add someuser/someplugin
```

## `pixelartui-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ pixelartui-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ pixelartui-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/inspect.ts)_

## `pixelartui-cli plugins install PLUGIN`

Installs a plugin into pixelartui-cli.

```
USAGE
  $ pixelartui-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into pixelartui-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PIXELARTUI_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PIXELARTUI_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ pixelartui-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ pixelartui-cli plugins install myplugin

  Install a plugin from a github url.

    $ pixelartui-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ pixelartui-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/install.ts)_

## `pixelartui-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ pixelartui-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ pixelartui-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/link.ts)_

## `pixelartui-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ pixelartui-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pixelartui-cli plugins unlink
  $ pixelartui-cli plugins remove

EXAMPLES
  $ pixelartui-cli plugins remove myplugin
```

## `pixelartui-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ pixelartui-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/reset.ts)_

## `pixelartui-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ pixelartui-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pixelartui-cli plugins unlink
  $ pixelartui-cli plugins remove

EXAMPLES
  $ pixelartui-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/uninstall.ts)_

## `pixelartui-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ pixelartui-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pixelartui-cli plugins unlink
  $ pixelartui-cli plugins remove

EXAMPLES
  $ pixelartui-cli plugins unlink myplugin
```

## `pixelartui-cli plugins update`

Update installed plugins.

```
USAGE
  $ pixelartui-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/update.ts)_
<!-- commandsstop -->
