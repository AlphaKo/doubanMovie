const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');

function douban(url, dir) {
    return async (ctx, next) => {
        let rpath = ctx.request.path;
        let fp = path.join(dir, rpath.substring(url.length));
        console.log(fp);
        if (await fs.exists(fp)) {
            ctx.response.type = mime.lookup(rpath);
            ctx.response.body = await fs.readFile(fp);
        } else {
            await next();
        }
    };
}

module.exports = douban;
