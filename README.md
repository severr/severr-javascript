# severr-javascript - the javascript library for the Severr API

Get your application events and errors to Severr via the *Severr API*.

- API version: 1.0.0
- SDK version: 1.0.0

## Frameworks supported
- browserify 
- nodejs

## Dependencies
npm install --save severr_javascript

## Getting Started

### Create a client
```javascript
var SeverrClient = require('../index.js');
var client = new SeverrClient('11ca50c784b7144ac36de822e83d8069609584866662'); // replace value within quotes with your API key instead
```

### Option-1: Handle exceptions with a global handler
```javascript
// Option-1: Add a global exception handler, any error thrown with throw new Error('...'); will now be sent to Severr
client.handleExceptions(false);
```

### Option-2: Create and send event
```javascript
// Option-2: Send event manually to Severr
try {
    // create a new event
    var appEvent = client.createAppEvent();
    
    // ... populate any member data ...

    // send it to Severr
    client.sendEvent(appEvent, function(error, data, response) {
        if(error) {
            console.error('Error Response: ' + error + ', data = ' + data + ', response = ' + JSON.stringify(response));
        } else {
            console.log('Response: data = ' + data + ', response = ' + JSON.stringify(response));
        }
    });
} catch(err) {
    console.err("Error: " + err);
}
```

### Full sample
```javascript
'use strict';

// create a new client
var SeverrClient = require('../index.js');
var client = new SeverrClient('11ca50c784b7144ac36de822e83d8069609584866662'); // replace value within quotes with your API key instead

// Option-1: Add a global exception handler, any error thrown with throw new Error('...'); will now be sent to Severr
client.handleExceptions(false);

// Option-2: Send event manually to Severr
try {
    // create a new event
    var appEvent = client.createAppEvent();
    
    // ... populate any member data ...

    // send it to Severr
    client.sendEvent(appEvent, function(error, data, response) {
        if(error) {
            console.error('Error Response: ' + error + ', data = ' + data + ', response = ' + JSON.stringify(response));
        } else {
            console.log('Response: data = ' + data + ', response = ' + JSON.stringify(response));
        }
    });
} catch(err) {
    console.err("Error: " + err);
}
```

<a name="documentation-for-models"></a>
## Documentation for AppEvent

 - [SeverrApi.AppEvent](generated/docs/AppEvent.md)


