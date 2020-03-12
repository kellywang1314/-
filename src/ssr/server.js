
import express from 'express'
import ReactViews from 'express-react-views'
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
 

