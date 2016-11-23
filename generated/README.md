# severr_api

SeverrApi - JavaScript client for severr_api
Get your application events and errors to Severr via the *Severr API*.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2016-11-19T08:23:24.799-08:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install severr_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SeverrApi = require('severr_api');

var api = new SeverrApi.EventsApi()

var data = new SeverrApi.AppEvent(); // {AppEvent} Event to submit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.eventsPost(data, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.severr.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SeverrApi.EventsApi* | [**eventsPost**](docs/EventsApi.md#eventsPost) | **POST** /events | Submit an application event or error to Severr


## Documentation for Models

 - [SeverrApi.AppEvent](docs/AppEvent.md)
 - [SeverrApi.CustomData](docs/CustomData.md)
 - [SeverrApi.CustomDoubleData](docs/CustomDoubleData.md)
 - [SeverrApi.CustomStringData](docs/CustomStringData.md)
 - [SeverrApi.Error](docs/Error.md)
 - [SeverrApi.InnerStackTrace](docs/InnerStackTrace.md)
 - [SeverrApi.StackTraceLine](docs/StackTraceLine.md)
 - [SeverrApi.StackTraceLines](docs/StackTraceLines.md)
 - [SeverrApi.Stacktrace](docs/Stacktrace.md)


## Documentation for Authorization

 All endpoints do not require authorization.
