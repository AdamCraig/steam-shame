# Steam Shame

An Ember 2 web app that utilizes various calls in the Steam API to output interesting data about Steam games, user profiles and user playtime.

## Created By Adam Craig, Noah Kittleson, Ashley Maceli, and Andrew Russo

## Description

Steam Shame is an Ember 2 web app allows a user to search several aspects of the Steam API, such as a User ID search and Game search.
On the User Profile page, users can view various statistics about a user's library and playtimes, including charts (using ember-charts) to map the data and display it in interesting and informative ways. On the Game Results page, users can view descriptions of the searched game, as well as news and system requirements.

## Disclaimer
_We do not own the images used in this web app._
_We own no copyrighted or trademarked material herein._
_All rights belong to their respective owners._

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <https://github.com/AdamCraig/steam-info>`
* change into the new directory
* `npm install`
* `bower install`
* create a .env file in the root of the project directory, and supply a valid Steam API key and Backpack.TF API key in the following format (no spaces or quotes):
* apiKey=YOURAPIKEYGOESHERE
* bptfKey=YOURAPIKEYGOESHERE

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### License

The MIT License (MIT)

Copyright (c) 2016 - Adam Craig, Noah Kittleson, Ashley Maceli, Andrew Russo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
