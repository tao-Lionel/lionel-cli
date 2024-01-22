const handlebars = require('handlebars')
const fs = require('fs-extra')
const path = require('path')

async function add(name, options) {
    const cwd = process.cwd()
    const template = path.resolve(__dirname, 'template/list/normal.tpl')
    const str = fs.readFileSync(template, 'utf8')

    const t = handlebars.compile(str);
    const data = {
        "name": 'tao',
    }

    let res = t(data);
    console.log(res)

    const targetDir = path.resolve(cwd, name)
    console.log(targetDir)

    fs.writeFileSync(targetDir + ".vue", res)


}


module.exports = add