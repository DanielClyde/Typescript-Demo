# Typescript-Demo

## Running This Demo:
- Have node installed (see below for more info)
- run `npm install -g typescript` to get the tsc (typescript compiler)
- Navigate to this project's directory
- run `tsc`. This will transpile the .ts files in the src/ folder into .js files in the dist/ folder
- navigate to the dist/ folder and run `node simpledemo.js` to run the simple command line javasript program
  (note that you can't run the demo.js with node because it accesses the DOM which doesn't exist in the command line, so it must be run as a script in HTML)
- open up index.html to see what demo.js script does!

## What is Typescript?
Typescript provides a safe and strict typing interface to javascript. It then gets compiled (technically "transpiled") into valid runnable javascript code. This means that all valid javascript code is actually valid typescript. But typescript provides many awesome tools to help developers create better structured web apps.

## Why Typescript?
- static as well as dynamic typing
- code completion and intellisense to help find potential bugs before even running
- module importing and exporting
- more strong OOP
- ability to create custom types
- union and intersection of types
- readable, easier for developers to understand each other's code

## How to get started?
### Node
Node is a javascript runtime framework (so you can run javascript code from the command line). There are many useful Node packages. The Node Package Manager can be used to install a typescript compiler that will transpile .ts files to .js files that can then be run with node (or used as scripts in HTML etc.)
Node provides web frameworks to then create backend APIs for web applications in javascript (or typescript)
1) Install Node (which should come with npm, see links below)
2) use npm install -g to globally install typescript
3) use tsc --init to initialize a tsconfig.json file (this is what the tsc looks for to transpile ts into js)[More info about tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
4) create a .ts file with some typescript code
5) run tsc in project root, you should then see a .js file be made
### Deno
The original creator of Node, Ryan Dahl, has recently began working on a project similar to Node, but meant to be a typescript runtime (so it can compile typescript code outside of the box without NPM). This framework is still very new but will most likely become the primary tool for typescript developers as it removes the need for NPM.

## Helpful Links
[Typescript Docs](https://www.typescriptlang.org/docs/home.html)

[Node Download and Docs](https://nodejs.org/en/)

[NPM](https://www.npmjs.com/get-npm) Node downloads with npm already but here is a link to get both and to read up on npm

[NVM (Node Version Manager) Github](https://github.com/nvm-sh/nvm) this is a nice tool to manage all your different version of node for different projects.

[Getting Started Tutorial](https://www.robertcooper.me/get-started-with-typescript-in-2019) A helpful little guide that goes over some set up and some cool things you can do in Typescript

[Javascript Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) Information about the `__prototype` of all objects in js

