import { Message, MessageBox } from 'element-ui'

export function isHasNullValue(obj) {
  if (obj instanceof Object) {
    for (let key in obj) {
      if (obj[key] == '') {
        return true
      }
    }
    return false
  }
  return 'error'
}

export function errorValid() {
  Message({
    message: '校验失败，请检查！',
    type: 'error',
    duration: 1000
  })
  return false
}

export function confirm(msg) {
  return MessageBox.confirm(msg, '提示', {
    cancelButtonText: '取消',
    confirmButtonText: '确定',
    type: 'warning'
  })
}

export function tips(type, msg) {
  const box = {
    error: () => {
      Message({
        message: msg || '错误',
        type: 'error',
        duration: 2000
      })
    },
    success: () => {
      Message({
        message: msg || '保存成功',
        type: 'success',
        duration: 1500
      })
    },
    warn: () => {
      Message({
        message: msg || '异常',
        type: 'warning',
        duration: 1500
      })
    }
  }
  return box[type]()
}

export function dg(array, newArray) {
  if (!(array instanceof Array)) {
    return []
  }
  array.map(item => {
    if (item.children && item.children.length > 0) {
      let res = dg(item.children, [])
      newArray.push({ label: item.name, value: item.id, children: res })
    } else {
      newArray.push({ label: item.name, value: item.id })
    }
  })
  return newArray
}

export function unitList() {
  return [{
    id: '个',
    name: '个'
  },
  {
    id: '箱',
    name: '箱'
  },
  {
    id: '条',
    name: '条'
  },
  {
    id: '盒',
    name: '盒'
  }, {
    id: '包',
    name: '包'
  }, {
    id: '斤',
    name: '斤'
  }, {
    id: '两',
    name: '两'
  }, {
    id: '件',
    name: '件'
  }, {
    id: '瓶',
    name: '瓶'
  }, {
    id: '千克',
    name: '千克'
  }]
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
