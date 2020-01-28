'use strict';

module.exports = {
    env: 'production',
    https: true,
    port: process.env.PORT || 443,
    mongo: {
        uri: process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        'mongodb://mongodb:27017/pisignage-server',
        options: {useMongoClient: true}
    }
};
