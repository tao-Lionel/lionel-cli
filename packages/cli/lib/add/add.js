const handlebars = require('handlebars')
const fs = require('fs-extra')
const path = require('path')
const inquire = require('inquirer')
const { log } = require('../utils')

async function add(name, options, type, targetPath) {
  const cwd = process.cwd()
  let templatePath

  switch (type) {
    case '普通列表':
      templatePath = path.resolve(__dirname, 'template/list/normal.tpl')
      break
    case '树状列表':
      templatePath = path.resolve(__dirname, 'template/list/tree.tpl')
      break
    case '普通详情':
      templatePath = path.resolve(__dirname, 'template/detail/normal.tpl')
      break
    case '特殊详情':
      templatePath = path.resolve(__dirname, 'template/detail/normal.tpl')
      break
  }
  const str = fs.readFileSync(templatePath, 'utf8')

  const template = handlebars.compile(str);
  const data = {
    "name": 'tao',
  }

  let res = template(data);

  const targetDir = path.resolve(cwd, targetPath, name)
  console.log('targetDir', targetDir)

  fs.writeFileSync(targetDir + ".vue", res)

  console.log(`${log('Success')}生成页面成功，请查看对应目录：` + targetDir + ".vue")
}


module.exports = add