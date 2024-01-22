#!/usr/bin/env node

const program = require('commander')
const inquire = require('inquirer')
const chalk = require('chalk')
const { create } = require('../lib/create/create.js')

program
  .command("create <app-name>")
  .description('新建项目')
  .action((name, options) => {
    create(name, options)
  })

program
  .command('add <page-name>')
  .description('添加页面')
  .action(async (name, options) => {
    const { path } = await inquire.prompt([{
      name: 'path',
      message: '请输入当前页面路径(如：my/first/index)'
    }])

    if (!path) {
      console.log(`❌ 文件路径不能为空`)
      return
    }


    // 选择页面类型
    const { type } = await inquire.prompt([{
      name: 'type',
      type: 'list',
      message: '请选择页面类型',
      choices: [
        '列表', '详情',
      ]
    }])

    const typeObj = {
      列表: ['普通列表', '树状列表'],
      详情: ['普通详情', '特殊详情'],
    }

    const { detailType } = await inquire.prompt([{
      name: 'detailType',
      message: `${type} 类型选择`,
      type: 'list',
      choices: typeObj[type]
    }])

    require('../lib/add/add.js')(name, options, detailType, path)
  })

program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`lionel <command> --help`)} for detailed usage of given command.`)
  console.log()
})

program.parse(process.argv)

