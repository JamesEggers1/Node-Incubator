Node-Incubator
==============

A simple repository for me to experiment and work on Node.js projects before spinning them off into their own dedicated repositories.  This repository will have only temporary or exploritory projects in it.  Once a project is established enough, I'll move it out into it's own repository.

# Current Projects #

## Database Migrator (coming soon) ##

After looking around NPM, I haven't been able to find a good database migrator that works consistently.  So I'm going to write my own after the importer project gets done.

## npm-bootstrapper (coming soon) ##

The npm-bootstrapper will be an automation utility that'll create a number of base files and directories that I find myself creating for each of my npm packages.

## Importer ##

The Importer project provides a simple module that, when passed a directory, will import in all node modules into an object or array to be used by other modules.  Very useful for dynamically generated scripts or scripts of similar purpose and definition (e.g. database migration scripts).

# Previous Projects #

## DateValidator ##

The DateValidator project is to create a simple Date validator for both client-side and server-side JavaScript. At the moment, the goal is to keep things small and focus only on ensuring Day, Month, and Year are valid.  It is not intended to have the power of the node-dateutils project.

- This Project has moved to the [node-DataValidator repository](https://github.com/JamesEggers1/node-DateValidator).

## ABA ##

The US American Bankers Association validation for routing numbers.

- This Project has moved to the [node-ABAValidator repository](https://github.com/JamesEggers1/node-ABAValidator).

## Luhn ##

The Luhn project will hold a browser and node package for validating credit card numbers using the Luhn algorithm.

- This Project has moved to the [node-luhn repository](https://github.com/JamesEggers1/node-luhn).

# License #

Copyright (c) 2012 James Eggers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.