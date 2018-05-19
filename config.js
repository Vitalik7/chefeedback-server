const host = 'localhost';

module.exports = {
    port: process.env.port || process.env.PORT || '3000',
     mongoUrl: process.env.MONGODB_URI || `mongodb://user:user123@ds229380.mlab.com:29380/feedback-cherkasy`  // Vitalik db

    };
