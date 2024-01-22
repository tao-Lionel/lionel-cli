const path = require('path')
const { exec } = require('child_process')
const ora = require('ora')

const libraryMap = {
    'Ant Design': 'antd',
    'iVew': 'view-ui-plus',
    'Ant Design Vue': 'ant-design-vue',
    'Element': 'element-plus'
}

async function install(cmdPath, options) {
    const { frame, library } = options
    const command = `pnpm add ${frame} && pnpm add ${libraryMap[library]}`
    const spinner = ora()
    spinner.start('正在安装依赖，请稍等')
    await exec(
        command,
        { cwd: path.resolve(cmdPath) },
        function (error, stdout, stderr) {
            console.log('error', error)
            if (error) {
                spinner.fail('依赖安装失败')
            }
            spinner.success('依赖安装成功')
            console.log('stdout', stdout)
            console.log('stderr', stderr)
        }
    )
}

exports.install = install