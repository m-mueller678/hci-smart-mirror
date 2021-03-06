const InputEventService = require("./input_event_service");
const KeyInputService = require("./key_input_service");
const express = require('express');
const LeapService = require("./leap_service")

require("./input_event_service")

const PORT = 3000;
const app = express();
const server = app.listen(PORT);

app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

InputEventService.init(server, PORT);

LeapService.on(
    InputEventService.sendWakeUp,
    InputEventService.sendLeftSwipe,
    InputEventService.sendRightSwipe,
    InputEventService.sendUpSwipe,
    InputEventService.sendDownSwipe,
)


//setInterval(InputEventService.sendWakeUp, 1500);

//setInterval(InputEventService.sendLeftSwipe, 8000);
/*
setInterval(InputEventService.sendRightSwipe, 1500);
setInterval(InputEventService.sendUpSwipe, 1500);
setInterval(InputEventService.sendDownSwipe, 1500);*/