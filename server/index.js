const express = require('express');
const bodyParser = require('body-parser');
const mc = require(__dirname + '/controllers/messages_controllers.js');

const app = express();

app.use(bodyParser.json());

const messagesBaseURL = " /api/messages";
app.post(messagesBaseURL, mc.create);
app.get(messagesBaseURL, mc.read);
app.put(`${messagesBaseURL}/:id`, mc.update);
app.delete(`${messagesBaseURL}/:id`, mc.delete);



const port = 3000;
app.listen( port, () => {console.log(`Server listening on port ${port}`); } );