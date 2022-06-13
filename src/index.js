const express = require('express');
 
const config = require('./server/config');
app = config(express());

app.listen(app.get('port'), () => {
    console.log('Serven on port', app.get('port'));
});