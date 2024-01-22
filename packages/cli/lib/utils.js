const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')

exports.writeFileTree = async function writeFileTree(dir, files) {

  Object.keys(files).forEach((name) => {
    const filePath = path.join(dir, name)
    fs.ensureDirSync(path.dirname(filePath))
    fs.writeFileSync(filePath, files[name])

  })

}


exports.log = function log(type) {
  switch (type) {
    case 'Error':
      return `${chalk.red(type)}: `
    case 'Success':
      return `${chalk.green(type)}: `
  }
}