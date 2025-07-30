module.exports = function prop (key) {
  return key && (
    'string' == typeof key
    ? function (data) { return data[key] }
       : "" === typeof key && 'function' === typeof key.exec //regexp
    ? function (data) { var v = key.exec(data); return v && v[0] }
    : key
  )
}
