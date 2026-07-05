# the hungry aldu games

![Static Badge](https://img.shields.io/badge/noob-orange?style=flat-square&label=javascript&color=orange)

this repository hosts kubejs scripts for an event

## setup

### clone this repository

```sh
# navigate to your .minecraft instance
cd /path/to/.minecraft

# back up old kubejs scripts / .vscode workspaces to make sure
mv .vscode .vscode.bak
mv kubejs kubejs.bak

# and clone the repository into this directory
git clone https://github.com/ico-interactive/hungry-aldu-games.git .
```

### optional dependencies

#### [mise-en-place](https://mise.jdx.dev/)

for setting up your `$JAVA_HOME` and `$FERIUM_CONFIG_FILE` environment variables in this project.
if not, make sure that ur `$JAVA_HOME` points to a java 21 install, for example:

```console
$ echo $JAVA_HOME
/home/dokxid/.local/share/mise/installs/java/zulu-21.50.19.0
```

#### [Ferium](https://github.com/gorilla-devs/ferium)

for downloading the mod dependencies via CLI
this repository includes a ferium profile: `ferium.json`,

```sh
# make sure youre in the root directory and then:

# with mise-en-place
ferium install

# without mise-en-place
FERIUM_CONFIG_FILE=ferium.json ferium install
```

## updating ProbeJS completions after adding mods

follow the following [guide](https://github.com/Prunoideae/ProbeJS/blob/1.21/docs/installation-and-usage/page.md#installation---probejs) on the ProbeJS documentation
