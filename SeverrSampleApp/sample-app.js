'use strict';

// TODO: Move this file/directory out to another repo
var SeverrClient = require('../index.js');
var client = new SeverrClient('66ca50c784b7176ac36de897e83d8069609584866662', 'http://192.168.0.110:3000/api/v1');
var appEvent = client.createAppEvent();
client.handleExceptions(false);

throw new Error('This is crazy');
try {

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

