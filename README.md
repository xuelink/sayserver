# sayserver

Turn your mac to TTS server with `say` command.
Runs on Mac OS X.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]

## Getting Started
Install the module with: `npm install sayserver`

```javascript
var sayserver = require('sayserver');
sayserver.start();
```

## Server Endpoints

### `/speak`

`/speak` is an endpoint that accepts an HTTP `POST` request with two parameters:

* voice - The Mac OS X voice to speak the text. (optional, default: 'Alex')
* text - The text to speak. (required)

### `/media`

`/media` is an endpoint that accepts an HTTP `GET` request to return a specific media of \*.aiff file. The directory sayserver uses to look for [randomstring]*\.aiff file.

## cURL Example

to make text to TTS *.aiff file.
```sh
sh $ curl -dtext='Hello World' -dvoice=Alex http://localhost:4000/speak
> http://localhost:4000/media/[randomstring].aiff
```

and you want to get *.aiff file
to get aiff file.
```sh
sh $ curl http://localhost:4000/media/[randomstring].aiff
```
or paste to the browser.

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/sayserver
[downloads-image]: https://img.shields.io/npm/dm/sayserver.svg
[downloads-url]: https://npmjs.org/package/sayserver
