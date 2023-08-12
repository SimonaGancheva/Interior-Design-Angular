const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://127.0.0.1:27017/interiorDesign',
        origin: ['http://localhost:5555', 'http://localhost:4200', 'https://archstagram.netlify.app/']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb+srv://admin:admin@archstagram.fbdxmve.mongodb.net/interiorDesign',
        // dbURL: process.env.DB_URL_CREDENTIALS,
        origin: ['http://localhost:5555', 'http://localhost:4200', 'https://archstagram.netlify.app/']
    }
};

module.exports = config[env];
