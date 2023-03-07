const app = require('./app');
const dotenv = require('dotenv').config();


// process.on("uncaughtException", (err) => {
//     console.log("UNCAUGHT EXCEPTION!!! shutting down...");
//     console.log(err.name, err.message);
//     process.exit(1);
// });

// Initialize DB
require('./app/config/db')();


const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
});

// process.on("unhandledRejection", (err) => {
//     console.log("UNHANDLED REJECTION!!!  shutting down ...");
//     console.log(err.name, err.message);
//     server.close(() => {
//         process.exit(1);
//     });
// });
