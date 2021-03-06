# Web UI Interface

Be aware that the master branch is not fully functional.

It was branched from https://github.com/bittorrent/webui which is/was broken as fuck.

## Things fixed/changed

I forked a copy of v0.380 with the hope of making some small tweaks.

There was no build script to generate the `webui.zip` file, which consists of every source file individually gzipped.

When it did compile, the code simply didn't work. I shouldn't have been surprised since the README clearly stated the master branch was broken.

- added a build.sh to generate webui.zip, loosely based off build script from [afool622's material design webui](https://github.com/afool622/webui). Make a backup of your webui.zip and run `./build.sh` via WSL
- merged [updated DOM file PR by deepak1556](https://github.com/bittorrent/webui/pull/12)
- now able to load webui without it crashing
- fixed language issues on load
- fixed settings dialog not loading
- fixed broken styling for settings dialog
- fixed settings dialog remote panel not showing up
- fixed settings dialog remote panel showing wrong text
- fixed a bunch of incorrectly named translation keys
- fixed add label dialog
- removed use of jquery library because its not imported
- fixed rss dialog functionality
- added back in "Torrent delete dialog"
- fixed mismatched ids in tabs.js
- fixed incorrectly named overlay/cover
- fixed table header/content column alignment
- fixed `_loadStrings()` warnings on load
- re-enable right click menu (hold shift and click)
- list of labels will truncate label in favour of number of torrents
- fixed dialog titles overflowing
- copy to clipboard rather than show an awkward popup
- fixed poor text wrapping in set label dialog
- fixed bug in setupKeyboardEvents() that prevented ctrl+a from working
- fixed sorting of RSS feeds to be alphabetical

There's more to come if I can be bothered, but at least this is a working branch.

I'm just updating this to fix the things I need. If you find something wrong with it, fix it and submit a PR.

If all you want is a working copy of the v0.380 code, then take a look at https://github.com/twig/webui/releases/tag/v0.380-fixed

## Things irreversibly changed

- removed explicit support for old versions of Internet Explorer
- removed explicit support for Opera browser
- all code files have been parsed through prettier
- now using webpack for JS and (S)CSS
- removed browser prefixes on CSS that is now standard
- removed Falcon support (there wasn't enough info to get that working)

## Improvements

- labels on the left panel truncate when too long but maintain torrent count

Added support for modern tooling such as:

- [yarn](https://yarnpkg.com/)
- [webpack](https://webpack.js.org/)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org)
- [stylelint](https://stylelint.io/)
- [sass](https://sass-lang.com/)

More to come over time

## How to ...

### Get started

First off, you'll need `nvm` and `yarn` installed. Follow the instructions for [nvm](https://github.com/nvm-sh/nvm) and [yarn](https://classic.yarnpkg.com/en/docs/install/).

First time setup:

- Install the latest node LTS via nvm using `nvm install --lts` (v12.16.1 at time of writing)
- Verify you're using the right version with `node --version`
- In the project root, type `yarn install`
- That is all.

### build webui.zip

Runs script to build the webui.zip package. This will also copy it to the default uTorrent directory.

To build the project for use or testing, type:

> yarn build [-v]

Optional `-v` argument to get more details about whats happening.

### prettify the code

Runs `prettier` to ensure all relevant source files (js, css, html) are formatted in a consistent way.

> yarn prettify
