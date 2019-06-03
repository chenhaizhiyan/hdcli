#!/usr/bin/env node

'use strict'

const program = require('commander')
const packageInfo = require('../../package.json')

program.version(packageInfo.version)

program
    .command('init') // hd init
    .description('生成一个项目')
    .alias('i') // 简写
    .action(() => {
      require('../cmd/init')()
    })

program
    .command('add') // hd add
    .description('添加新模板')
    .alias('a') // 简写
    .action(() => {
      require('../cmd/add')()
    })

program
    .command('list') // hd list
    .description('查看模板列表')
    .alias('l') // 简写
    .action(() => {
      require('../cmd/list')()
    })

program
    .command('delete') // hd delete
    .description('查看模板列表')
    .alias('d') // 简写
    .action(() => {
      require('../cmd/delete')()
    })
    
program.parse(process.argv)

if(!program.args.length){
  program.help()
}