const express = require('express');
const cors = require('cors'); 


const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.json({message: 'Hello'});
});

app.use("/user",require('./routes/userRoutes'));
app.use("/room",require('./routes/roomRoutes'));
app.use("/food",require('./routes/foodRoutes'));
app.use("/uploads", express.static('uploads'))

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});