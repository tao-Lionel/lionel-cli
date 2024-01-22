#!/usr/bin/env node

const program = require('commander')
const { create } = require('../lib/create/create.js')

program
  .command("create <app-name>")
  .description('新建项目')
  .option('-p xx')
  .action((name, options) => {
    create(name, options)
  })

program
  .command('add <page-name>')
  .description('添加页面')
  .action((name, options) => {
    require('../lib/add/add.js')(name, options)
  })


program.parse(process.argv)

// async function (argv) {
//   console.log('argv:', argv)
//   const answers = await inquirerPrompt(argv)
//   console.log('answers', answers)
//   const { name, type } = answers
//   const isMkdirExists = checkMkdirExists(
//     path.resolve(process.cwd(), `./src/pages/${name}`)
//   )
//   if (isMkdirExists) {
//     console.log(`${name}文件夹已经存在`)
//   } else {
//     copyDir(
//       path.resolve(__dirname, `./template/${type}`),
//       path.resolve(process.cwd(), `./src/pages/${name}`)
//     )
//   }

//   const isMkdirExistsFile = checkMkdirExists(
//     path.resolve(process.cwd(), `./src/pages/${name}/index.js`)
//   )
//   if (isMkdirExistsFile) {
//     console.log(`${name}/index.js文件已经存在`)
//   } else {
//     copyTemplate(
//       path.resolve(__dirname, `./template/${type}/index.tpl`),
//       path.resolve(process.cwd(), `./src/pages/${name}/index.js`),
//       {
//         name
//       }
//     )
//     install(process.cwd(), answers)
//   }


// }
// ).argv