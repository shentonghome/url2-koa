const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

app.use(bodyParser());

app.use(controller());

var port = 30001;
app.listen(port);

console.log(`start at http://localhost:${port}`);

