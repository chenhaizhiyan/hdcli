const Table = require('cli-table')

const tip = require('./tip')

const table = new Table({
  head: ['name', 'description',],
  style: {
    head: ['cyan']
  }
})

module.exports = (config) => {
  const keys = Object.keys(config)

  if(keys.length === 0) {
    tip.fail('暂无模板!\n请执行hd add添加模板')
    return
  }

  keys.forEach((key) => {
    table.push(
      [`${key}`, config[key].description]
    )
  })
  
  const list = table.toString()
  if (list) {
    tip.info('模板列表是: ')
    console.log(`${list}\n`)
  } else {
    tip.fail('暂无模板!\n请执行hd add添加模板')
  }
}
