const mongose = require('mongoose');

const { database } = requiere('./keys');

mongose.connect(database.URI, {
    userNewUrlParser: true
})
.then(db => console.log('DB IS CONNECTED'))
.catch(err => console.error(err));
