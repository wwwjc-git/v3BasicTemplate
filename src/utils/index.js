import { getToken } from './auth'

/**
 * 解析js日期
 * @param {string} jsonDate json格式化的日期
 */
export function parseJsonDate (jsonDate) {
  if (!jsonDate || jsonDate.length < 6) return ''
  // 格式类似：/Date(1410364800000-0000)/
  return new Date(parseInt(jsonDate.substr(6)))
}

/**
* 把一个js日期类型参数转换成 'yyyy-mm-dd' 格式字符串
* @param {string} format 日期格式, 如： yyyy-MM-dd hh:mm:ss
*/
export function formatDate (date, format = 'yyyy-MM-dd') {
  if (!date) return ''

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  format = format.replace('MM', month.toString().replace(/^(\d)$/, '0$1'))

  if (format.indexOf('yyyy') > -1) {
    format = format.replace('yyyy', year.toString())
  } else if (format.indexOf('yy') > -1) {
    format = format.replace('yy', year.toString().substr(2, 2))
  }

  format = format.replace('dd', day.toString().replace(/^(\d)$/, '0$1'))

  if (format.indexOf('t') > -1) {
    if (hours > 11) {
      format = format.replace('t', 'pm')
    } else {
      format = format.replace('t', 'am')
    }
  }

  if (format.indexOf('HH') > -1) {
    format = format.replace('HH', hours.toString().replace(/^(\d)$/, '0$1'))
  }

  if (format.indexOf('hh') > -1) {
    if (hours > 12) {
      hours -= 12
    }

    if (hours === 0) {
      hours = 12
    }
    format = format.replace('hh', hours.toString().replace(/^(\d)$/, '0$1'))
  }

  if (format.indexOf('mm') > -1) {
    format = format.replace('mm', minutes.toString().replace(/^(\d)$/, '0$1'))
  }

  if (format.indexOf('ss') > -1) {
    format = format.replace('ss', seconds.toString().replace(/^(\d)$/, '0$1'))
  }

  return format
}

/**
 * 把布尔值转换成中文
 * @param {bool} value 布尔值
 */
export function toBoolText (value) {
  return value ? '是' : '否'
}

/**
 * 根据使用状态枚举返回对应的文本值
 * @param {string} value 使用状态
 */
export function toUseStatus (value) {
  return value === 'Valid' ? '启用' : '禁用'
}

/**
 * 数组分组
 * @param {array} xs 待分组的数组
 * @param {string} key 分组的key
 */
export function groupBy (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

/**
 * 得到上传控件需要的额外请求头,包括 Accept, Authorization
 */
export function getUploadHeaders () {
  return { Accept: 'application/json', Authorization: `Bearer ${getToken()}` }
}
