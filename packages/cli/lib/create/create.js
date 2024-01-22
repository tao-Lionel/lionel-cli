const path = require('path')
const fs = require('fs-extra')
const inquire = require('inquirer')
const chalk = require('chalk')
const { log } = require('../utils.js')

async function create(name, options) {
  const cwd = process.cwd()
  const targetDir = path.resolve(cwd, name)
  // TODO 校验文件夹名称
  // if (fs.existsSync(targetDir)) {
  //   console.log('文件夹已经存在')
  //   const { action } = await inquire.prompt([
  //     {
  //       name: 'action',
  //       type: 'list',
  //       message: `该目录${chalk.cyan(targetDir)}已存在，请选择操作`,
  //       choices: [
  //         { name: '覆盖', value: 'overwrite' },
  //         { name: '合并', value: 'merge' },
  //         { name: '取消', value: false }
  //       ]
  //     }
  //   ])
  //   if (!action) {
  //     return
  //   } else if (action === 'overwrite') {
  //     console.log(`\n删除${chalk.cyan(targetDir)}...`)
  //     await fs.remove(targetDir)
  //   }
  // }

  // TODO 选择不同的模板
  // const { preset } = await inquire.prompt([{
  //   name: 'preset',
  //   type: 'list',
  //   message: '选择框架',
  //   choices: [
  //     { name: 'Vue3', value: 'vue3' },
  //     { name: 'Vue2', value: 'vue2' },
  //     { name: 'React', value: 'react' }
  //   ]
  // }])

  if (fs.existsSync(targetDir)) {
    console.log(`${log('Error')}文件夹 ${chalk.red(targetDir)} 已经存在`)
    return
  } else {
    fs.mkdirSync(targetDir)
    if (fs.existsSync(targetDir)) {
      console.log(`${log('Success')}文件夹 ${chalk.cyan(targetDir)} 创建成功`)
    }
  }


  // 复制项目到目标文件夹
  fs.copy(path.resolve(__dirname, 'template/vue3'), targetDir, err => {
    if (err) {
      console.log(`${log('Error')}`, err)
    }
  })

  console.log(`${log('Success')} 构建成功，请查看对应目录：${chalk.cyan(targetDir)} `)

  // TODO 安装依赖
  // const pkg = {
  //   name: name,
  //   version: '1.0.0',
  //   devDependencies: {},
  // }

  // await writeFileTree(targetDir, { 'package.json': JSON.stringify(pkg) })

}




exports.create = create