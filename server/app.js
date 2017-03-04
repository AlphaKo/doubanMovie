const url = require('url');


const Koa = require('koa');

const fs = require('mz/fs');

const path = require('path');

const app = new Koa();

// parse user from cookie:
app.use(async (ctx, next) => {
    //ctx.state.user = parseUser(ctx.cookies.get('name') || '');
    ctx.state.user = {id: 0, name: 'anonymours', index: 0};
    await next();
});

// static file support:
let staticFiles = require('./static-files');
app.use(staticFiles('/', __dirname + '/dist'));


let douban = require('./douban');
app.use(douban('/douban', __dirname + '/mock'));

let server = app.listen(81);

console.log('app started at port 81...');
