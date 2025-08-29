var express = require('express');
var server = express();
// Make the 'apple-app-site-association' accessable to apple to verify the association
const path = require('path');

// Route to serve the apple-app-site-association file
server.get('/.well-known/apple-app-site-association', function(request, response) {
    console.log('Serving apple-app-site-association file');
    response.sendFile(path.join(__dirname, 'apple-app-site-association'), function(err) {
        if (err) {
            console.log('Error sending apple-app-site-association file');
            response.status(500).send('Error sending file');
        } else {
            console.log('apple-app-site-association file sent successfully');
        }
    });
});

// Route to redirect to the iOS app link
server.get('api/merchant/share', function(request, response) {
    console.log('Redirecting user to iOS app store');
    const targetUrl = 'https://apps.apple.com/us/app/jiver-delivery/id6736942151';
    response.redirect(targetUrl);
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// server.get('/.well-known/apple-app-site-association', function (request, response) {
//   response.sendFile(__dirname + '/apple-app-site-association');
// });

// server.get('/jiverdeliveryiosapp', function (request, response) {
//   const targetUrl = 'https://apps.apple.com/us/app/jiver-delivery/id6736942151';
//   response.redirect(targetUrl);
// });

// app.get('/.well-known/apple-app-site-association', function (request, response) {
//   console.log('inside -> .well-known/apple-app-site-associatio--1')
//   const filePath = path.join(__dirname, '../app/ios_push', 'apple-app-site-association');
//   console.log('wellknown PATH-> '+filePath)
//   response.sendFile(filePath);
//   console.log('wellknown ----exit')
// });

// app.get('/jiverdeliveryiosapp', function (request, response) {
//   console.log('inside jiverdeliveryiosapp----------1')
//   const targetUrl = 'https://apps.apple.com/us/app/jiver-delivery/id6736942151';
//   console.log('inside jiverdeliveryiosapp----------2')

//   response.redirect(targetUrl);
//   console.log('inside jiverdeliveryiosapp----------EXIT')

// });

// server.listen(8000);