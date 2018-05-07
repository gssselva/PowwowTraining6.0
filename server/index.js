const session = require('smartux-connect');
session.transform.powwowtraining60 = session.loadTransform('powwowtraining60');
require('./client');
session.start();